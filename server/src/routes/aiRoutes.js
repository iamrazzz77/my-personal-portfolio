import express from 'express';
import { askAiAssistant } from '../controllers/aiController.js';

const router = express.Router();

router.post('/ask', askAiAssistant);
router.post('/portfolio-ai', askAiAssistant);
router.post('/', askAiAssistant);

export default router;

