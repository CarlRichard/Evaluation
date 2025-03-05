import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createEvaluation, getEvaluation, getAllEvaluation, updateEvaluation, deleteEvaluation, getReponsesParQuestionnaire } from '../controllers/evaluation.controller.js';

export const evaluation = Router();

// Création d'une évaluation
evaluation.post('/', verifyToken, createEvaluation);

// Récupérer toutes les évaluations
evaluation.get('/', verifyToken, getAllEvaluation);

//recuperer tous le questionnaire
evaluation.get('/test/:id', verifyToken, getReponsesParQuestionnaire);

// Récupérer une évaluation par ID
evaluation.get('/:id', verifyToken, getEvaluation);


// Mise à jour d'une évaluation
evaluation.put('/:id', verifyToken, updateEvaluation);

// Supprimer une évaluation
evaluation.delete('/:id', verifyToken, deleteEvaluation);
