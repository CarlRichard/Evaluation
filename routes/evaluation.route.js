import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createEvaluation, getEvaluation, getAllEvaluation, updateEvaluation, deleteEvaluation, getReponsesParQuestionnaire, getEvaluationsByUser } from '../controllers/evaluation.controller.js';

export const evaluation = Router(); 
/* POST */
// Création d'une évaluation
evaluation.post('/', verifyToken, createEvaluation);

/* GET */
// Récupérer toutes les évaluations
evaluation.get('/', verifyToken, getAllEvaluation);
//recuperer tous le questionnaire
evaluation.get('/test/:id', verifyToken, getReponsesParQuestionnaire);
// Récupérer toutes les évaluations par utilisateur
evaluation.get('/mes-evaluations', verifyToken, getEvaluationsByUser);
// Récupérer une évaluation par ID
evaluation.get('/:id', verifyToken, getEvaluation);

/* PUT */
// Mise à jour d'une évaluation
evaluation.put('/:id', verifyToken, updateEvaluation);

/* DELETE */
// Supprimer une évaluation
evaluation.delete('/:id', verifyToken, deleteEvaluation);
