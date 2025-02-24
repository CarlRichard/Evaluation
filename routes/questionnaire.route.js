// routes/questionnaire.js
import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createQuestionnaire, getQuestionnaire } from '../controllers/questionnaire.controller.js';

export const questionnaire = Router();

// Création d'un questionnaire (route protégée, nécessite un token)
questionnaire.post('/questionnaire', verifyToken, createQuestionnaire);

// Lecture d'un questionnaire 
questionnaire.get('/questionnaire', verifyToken, getQuestionnaire);
questionnaire.get('/questionnaire/:id', verifyToken, getQuestionnaire);

// Les routes de mise à jour et de suppression 
// questionnaire.put('/questionnaire/:id', verifyToken, updateQuestionnaire);
// questionnaire.delete('/questionnaire/:id', verifyToken, deleteQuestionnaire);
