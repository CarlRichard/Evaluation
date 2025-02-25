import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createQuestion, getQuestion, putQuestion, deleteQuestion} from '../controllers/question.controller.js';

export const question = Router();

// Création question
question.post('/', verifyToken, createQuestion);

// Lecture question
question.get('/', verifyToken, getQuestion);
question.get('/:id', verifyToken, getQuestion);

//update question
question.put('/:id', verifyToken , putQuestion);

//delete question
question.delete('/:id', verifyToken , deleteQuestion);

