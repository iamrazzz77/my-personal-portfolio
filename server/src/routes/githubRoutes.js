import express from 'express';
import { getGithubStats } from '../controllers/githubController.js';

const router = express.Router();

router.get('/stats', getGithubStats);

export default router;
