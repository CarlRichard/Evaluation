import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createEvaluation, getEvaluation, putEvaluation, deleteEvaluation } from '../controllers/question.controller.js';

export const evaluation = Router();

// Création question
evaluation.post('/', verifyToken, createEvaluation);

// Lecture question
evaluation.get('/', verifyToken, getEvaluation);
evaluation.get('/:id', verifyToken, getEvaluation);

//update question
evaluation.put('/:id', verifyToken , putEvaluation);

//delete question
evaluation.delete('/:id', verifyToken , deleteEvaluation);

