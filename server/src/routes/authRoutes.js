import express from 'express';
import { loginAdmin, logoutAdmin, getAdminMe } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/me', protectAdmin, getAdminMe);

export default router;
