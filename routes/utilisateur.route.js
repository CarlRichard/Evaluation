// routes/questionnaire.js
import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
// import { checkRole, checkPermission } from '../middlewares/auth.js';
// import { getUserProfile, updateUserProfile } from '../controllers/utilisateur.controller.js';
import { createUtilisateur, getUtilisateur, getAllUtilisateur , updateUtilisateur, deleteUtilisateur, PutUtilisateur } from '../controllers/utilisateur.controller.js';

export const utilisateur = Router();

// Création Reponse
utilisateur.post('/', createUtilisateur);

// Lecture Reponse
utilisateur.get('/', verifyToken, getAllUtilisateur);
utilisateur.get('/:id', verifyToken, getUtilisateur);

//update Reponse  
utilisateur.put('/modifier/:id', verifyToken , PutUtilisateur);
utilisateur.patch('/:id', verifyToken , updateUtilisateur);

//delete Reponse
utilisateur.delete('/:id', verifyToken , deleteUtilisateur);

