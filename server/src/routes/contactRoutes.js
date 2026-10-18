import express from 'express';
import rateLimit from 'express-rate-limit';
import { handleContactSubmit, getContactMessages } from '../controllers/contactController.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// Strict rate limiter on contact submission (max 5 requests per IP per hour)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages sent from this IP address. Please wait an hour before trying again.' }
});

router.post('/', contactLimiter, handleContactSubmit);
router.get('/admin/messages', protectAdmin, getContactMessages);

export default router;
