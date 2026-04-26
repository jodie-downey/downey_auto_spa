# Downey Auto Spa — AI Agent Implementation Spec

**Purpose:** Drop this spec into Claude Code (VS Code extension) along with `downey-agent-system-prompt-v2.md` to have Claude Code scaffold the full AI agent into the existing `downeyautospa.com` React repo.

**Stack assumed:** React + React Router (existing), MongoDB backend (existing), Node/Express backend (new or existing). The agent uses Anthropic's Claude API via a server-side proxy to keep the API key secret.

---

## 1. Architecture Overview

```
Browser (React widget)
      │
      ▼  POST /api/chat  (conversation history + user message)
      │
Express backend  ────►  Anthropic Messages API (server-side only)
      │                       │
      │                       ▼
      │                 Claude response
      ▼
Browser renders assistant message in chat UI
```

**Why a backend proxy:**
- Anthropic API key never ships to the browser
- You can log conversations to MongoDB for later review if desired
- Rate limiting, abuse protection, and future auth can live in one place

---

## 2. Prerequisites

### Environment variables (add to `.env` — do NOT commit)

```bash
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-sonnet-4-5   # or whichever model is current
DOWNEY_BOOKING_URL=https://app.downeyautospa.com/book   # swap in when scheduler is live
```

### NPM packages

**Backend:**
```bash
npm install @anthropic-ai/sdk express cors dotenv
```

**Frontend (if not already present):**
```bash
npm install react-markdown
```

---

## 3. Backend Implementation

### File: `apps/api/src/routes/chatRoutes.ts` (or wherever your Express routes live)

```typescript
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { chatController } from '../controllers/chatController.js';

const router = Router();

// Prevent abuse: 20 messages per IP per 10 minutes
const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please call us at 270-776-3914.' },
});

router.post('/chat', chatLimiter, chatController);

export default router;
```

### File: `apps/api/src/controllers/chatController.ts`

```typescript
import type { Request, Response, NextFunction } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { BadRequestError } from 'jodiedowney-errors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load system prompt once at server startup
const SYSTEM_PROMPT_RAW = readFileSync(
  join(__dirname, '../config/system-prompt.md'),
  'utf-8'
);

// Swap placeholders with env-driven values at runtime
const SYSTEM_PROMPT = SYSTEM_PROMPT_RAW
  .replaceAll('[BOOKING_URL]', process.env.DOWNEY_BOOKING_URL || 'downeyautospa.com')
  .replaceAll('[TEAM_CONTACT]', '270-776-3914');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

type ClientMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export async function chatController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { messages } = req.body as { messages: ClientMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      throw new BadRequestError('messages array is required');
    }

    // Cap conversation length to keep costs bounded
    const trimmedMessages = messages.slice(-20);

    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages,
    });

    // Extract the text response
    const textBlock = response.content.find((b) => b.type === 'text');
    const reply = textBlock && 'text' in textBlock ? textBlock.text : '';

    return res.json({ reply });
  } catch (err) {
    next(err);
  }
}
```

### File: `apps/api/src/config/system-prompt.md`

Copy the contents of `downey-agent-system-prompt-v2.md` here.

### Mount the route

In your main Express app file:

```typescript
import chatRoutes from './routes/chatRoutes.js';
app.use('/api', chatRoutes);
```

---

## 4. Frontend Implementation

### File: `src/components/DowneyChat.tsx`

```typescript
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactGA from 'react-ga4';
import './DowneyChat.css';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content:
    "Hi! I'm the Downey Auto Spa assistant — I can help with tint, detailing, ceramic coating, and architectural tinting questions. What can I help you with?",
};

const API_ENDPOINT = '/api/chat';

export default function DowneyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  const handleOpen = () => {
    setIsOpen(true);
    ReactGA.event({
      category: 'engagement',
      action: 'chat_opened',
      label: window.location.pathname,
    });
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    ReactGA.event({
      category: 'engagement',
      action: 'chat_message_sent',
      label: window.location.pathname,
    });

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error('Chat request failed');

      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting. Please call or text the team at **270-776-3914** or visit **downeyautospa.com**.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="downey-chat-trigger"
          onClick={handleOpen}
          aria-label="Open chat assistant"
        >
          💬 Chat with us
        </button>
      )}

      {isOpen && (
        <div className="downey-chat-window" role="dialog" aria-label="Downey Auto Spa assistant">
          <div className="downey-chat-header">
            <div>
              <div className="downey-chat-title">Downey Auto Spa</div>
              <div className="downey-chat-subtitle">Franklin, KY · Est. 2017</div>
            </div>
            <button
              className="downey-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="downey-chat-body" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`downey-chat-msg downey-chat-msg-${msg.role}`}>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="downey-chat-msg downey-chat-msg-assistant downey-chat-typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>

          <div className="downey-chat-footer">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about tint, detailing, or ceramic coating…"
              rows={1}
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
              Send
            </button>
          </div>

          <div className="downey-chat-disclaimer">
            Or call/text{' '}
            <a href="tel:2707763914">270-776-3914</a>
          </div>
        </div>
      )}
    </>
  );
}
```

### File: `src/components/DowneyChat.css`

```css
/* Navy + cyan brand palette from the site */
:root {
  --downey-navy: #0e1b2e;
  --downey-cyan: #4dd9e8;
  --downey-cyan-soft: rgba(77, 217, 232, 0.15);
  --downey-text: #f6fbff;
  --downey-muted: #9fb0c7;
}

.downey-chat-trigger {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9998;
  background: var(--downey-cyan);
  color: var(--downey-navy);
  border: none;
  padding: 14px 22px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s ease;
}

.downey-chat-trigger:hover {
  transform: translateY(-2px);
}

.downey-chat-window {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 380px;
  height: 560px;
  background: var(--downey-navy);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--downey-text);
}

@media (max-width: 480px) {
  .downey-chat-window {
    width: calc(100vw - 16px);
    height: 75vh;
    right: 8px;
    bottom: 8px;
  }
}

.downey-chat-header {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.downey-chat-title {
  font-weight: 700;
  font-size: 15px;
}

.downey-chat-subtitle {
  font-size: 12px;
  color: var(--downey-muted);
}

.downey-chat-close {
  background: transparent;
  border: none;
  color: var(--downey-text);
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0 6px;
}

.downey-chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.downey-chat-msg {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
}

.downey-chat-msg-user {
  background: var(--downey-cyan);
  color: var(--downey-navy);
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}

.downey-chat-msg-assistant {
  background: var(--downey-cyan-soft);
  color: var(--downey-text);
  align-self: flex-start;
  border-bottom-left-radius: 4px;
}

.downey-chat-msg p {
  margin: 0 0 6px 0;
}
.downey-chat-msg p:last-child {
  margin-bottom: 0;
}

.downey-chat-typing {
  display: flex;
  gap: 4px;
  padding: 14px;
}
.downey-chat-typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--downey-muted);
  animation: typing 1.2s infinite ease-in-out;
}
.downey-chat-typing span:nth-child(2) { animation-delay: 0.2s; }
.downey-chat-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-3px); }
}

.downey-chat-footer {
  padding: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  gap: 8px;
}

.downey-chat-footer textarea {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  color: var(--downey-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  resize: none;
  font-family: inherit;
  outline: none;
}

.downey-chat-footer textarea:focus {
  border-color: var(--downey-cyan);
}

.downey-chat-footer button {
  background: var(--downey-cyan);
  color: var(--downey-navy);
  border: none;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.downey-chat-footer button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.downey-chat-disclaimer {
  padding: 8px 16px 12px;
  font-size: 11px;
  color: var(--downey-muted);
  text-align: center;
}

.downey-chat-disclaimer a {
  color: var(--downey-cyan);
  text-decoration: none;
  font-weight: 600;
}
```

### Mount it in your app

In `App.tsx` or wherever your main layout lives:

```typescript
import DowneyChat from './components/DowneyChat';

function App() {
  return (
    <>
      {/* ...existing routes and layout... */}
      <DowneyChat />
    </>
  );
}
```

---

## 5. Analytics Integration (MongoDB)

You already track `page_view`, `section_view`, and `quote_open` in MongoDB. Add three new event types for the chat agent so you can measure what it's doing for you:

### Extend your existing event tracker

```typescript
// chat_opened      → user opened the chat widget
// chat_message_sent → user sent a message
// chat_booking_click → assistant routed to booking and user clicked the link
```

The GA4 events are already wired in the component above (`chat_opened`, `chat_message_sent`). To add MongoDB tracking, call your existing event endpoint from inside `handleOpen` and `sendMessage`:

```typescript
// example pattern — adapt to your existing analytics client
fetch('/api/events', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'chat_opened',
    path: window.location.pathname,
    sessionId: getSessionId(),
  }),
});
```

This gives you parity with your current analytics stack and lets you answer: "how many home-page visitors opened the chat?" "which pages drive the most chat engagement?"

---

## 6. Before Going Live — Checklist

1. [ ] Copy `downey-agent-system-prompt-v2.md` into `apps/api/src/config/system-prompt.md`
2. [ ] Add `ANTHROPIC_API_KEY` to production environment (Render, Railway, Vercel, wherever the backend is hosted — **never commit it**)
3. [ ] Set `DOWNEY_BOOKING_URL` to the real scheduler link once it's live (currently placeholder)
4. [ ] Verify the `/api/chat` route is mounted and the rate limiter is active
5. [ ] Test with 5–10 real questions covering tint, ceramic, detail, and architectural scenarios
6. [ ] Confirm mobile layout on an actual phone, not just responsive mode
7. [ ] Add the `chat_opened` and `chat_message_sent` MongoDB events to match your existing analytics schema
8. [ ] Spot-check that the system prompt is NOT reachable from the browser (open dev tools → network tab → confirm the `/api/chat` request body contains only `messages`, not the prompt)

---

## 7. Post-Launch Tuning Loop

Once the agent is live, you'll want a feedback loop. Two lightweight options:

**Option A — Conversation logging**
Store each conversation in MongoDB. Review weekly for responses that misfired — either the agent got something wrong, or a customer asked something the prompt doesn't handle yet. Feed those learnings back into the system prompt.

**Option B — Thumbs-up/thumbs-down on each assistant message**
Adds a tiny UX cost but gives you real signal on which answers are landing. Worth it once you have enough traffic for the data to be meaningful.

Start with Option A. Option B only makes sense once you're getting 50+ conversations per week.

---

## 8. Cost Estimate

Rough ballpark assuming Claude Sonnet pricing (check current rates):
- Average conversation ≈ 6 turns ≈ 4,000 tokens in/1,500 out
- Cost per conversation ≈ $0.03–0.05
- 100 conversations/month ≈ $3–5/month
- 500 conversations/month ≈ $15–25/month

If volume blows up, Claude Haiku 4.5 runs cheaper and still handles this use case well — easy swap via the `ANTHROPIC_MODEL` env var.

---

## 9. What to Tell Claude Code

When you open Claude Code in VS Code, paste this:

> Read `downey-agent-implementation-spec.md` and `downey-agent-system-prompt-v2.md`. Implement the AI chat agent described in the spec into this repo. The existing site is React + React Router with a MongoDB analytics backend. Scaffold the Express chat route, the React `DowneyChat` component, and wire up the MongoDB analytics events to match the existing `page_view` / `section_view` / `quote_open` schema. Do NOT commit the `.env` file. When done, summarize what you changed and what I still need to do (add API key to hosting env, set booking URL, test).
