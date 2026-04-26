import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { track } from '../../utils/trackApi';
import { API_BASE } from '../../utils/constants';
import './DowneyChat.css';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "Hi! I'm the Downey Auto Spa assistant — I can help with tint, detailing, ceramic coating, and architectural tinting questions. What can I help you with?",
};

export default function DowneyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  const handleOpen = () => {
    setIsOpen(true);
    track('chat_opened', { path: window.location.pathname });
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    track('chat_message_sent', { path: window.location.pathname });

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error('Chat request failed');

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ]);
    } catch {
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

  const handleKeyDown = (e) => {
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
