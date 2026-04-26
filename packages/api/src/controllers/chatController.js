import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SYSTEM_PROMPT_RAW = readFileSync(
  join(__dirname, '../config/system-prompt.md'),
  'utf-8'
);

// Belt-and-suspenders: placeholders are pre-filled in the .md file,
// but the env var substitution here makes it easy to override without touching the file.
const SYSTEM_PROMPT = SYSTEM_PROMPT_RAW
  .replaceAll('[BOOKING_URL]', process.env.DOWNEY_BOOKING_URL || 'https://book.downeyautospa.com')
  .replaceAll('[TEAM_CONTACT]', '270-776-3914');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function chatController(req, res, next) {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-20),
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    return res.json({ reply: textBlock ? textBlock.text : '' });
  } catch (err) {
    next(err);
  }
}
