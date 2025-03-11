// routes/questionnaire.js
import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createQuestionnaire, getQuestionnaire, getAllQuestionnaire , updateQuestionnaire, deleteQuestionnaire, addQuestionToQuestionnaire, getQuestionsByQuestionnaire, getQuestionnairesByUserFormation } from '../controllers/questionnaire.controller.js';

export const questionnaire = Router();

// Associer une question à un questionnaire
questionnaire.post('/add-question/:questionnaireId/:questionId', verifyToken, addQuestionToQuestionnaire);
questionnaire.get('/recup-questions/:questionnaireId', verifyToken, getQuestionsByQuestionnaire);

// Création d'un questionnaire
questionnaire.post('/', verifyToken, createQuestionnaire);

// Lecture d'un questionnaire 
questionnaire.get('/', verifyToken, getAllQuestionnaire);

questionnaire.get("/filtre/formation", verifyToken, getQuestionnairesByUserFormation);

questionnaire.get('/:id', verifyToken, getQuestionnaire);




// Les routes de mise à jour et de suppression 
questionnaire.put('/:id',updateQuestionnaire);
questionnaire.delete('/:id',  deleteQuestionnaire);