import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { chatController } from '../controllers/chatController.js';

const router = Router();

const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please call us at 270-776-3914.' },
});

router.post('/chat', chatLimiter, chatController);

export default router;
