import express from 'express';
import { getUserById } from './users-controller.js';

const router = express.Router();

router.route('/:id').get(getUserById);

export default router;
