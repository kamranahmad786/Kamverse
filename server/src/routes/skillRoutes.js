import express from 'express';
import { getSkills, addSkill } from '../controllers/skillController.js';
const router = express.Router();
router.get('/', getSkills);
router.post('/', addSkill);
export default router;
