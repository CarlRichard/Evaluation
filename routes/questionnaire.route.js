// routes/questionnaire.js
import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createQuestionnaire, getQuestionnaire, getAllQuestionnaire , updateQuestionnaire, deleteQuestionnaire } from '../controllers/questionnaire.controller.js';

export const questionnaire = Router();

// Création d'un questionnaire (route protégée, nécessite un token)
questionnaire.post('/', verifyToken, createQuestionnaire);

// Lecture d'un questionnaire 
questionnaire.get('/', verifyToken, getAllQuestionnaire);
questionnaire.get('/:id', verifyToken, getQuestionnaire);

// Les routes de mise à jour et de suppression 
questionnaire.put('/:id', verifyToken, updateQuestionnaire);
questionnaire.delete('/:id', verifyToken, deleteQuestionnaire);
