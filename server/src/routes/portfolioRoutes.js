import express from 'express';
import { getProfile, getCurrentWork, updateCurrentWork, getProjects, getProjectBySlug, createProject, deleteProject } from '../controllers/portfolioController.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', getProfile);
router.get('/current-work', getCurrentWork);
router.put('/current-work', updateCurrentWork);
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);

// Admin Protected Routes
router.post('/admin/projects', protectAdmin, createProject);
router.delete('/admin/projects/:id', protectAdmin, deleteProject);

export default router;
