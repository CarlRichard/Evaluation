// routes/questionnaire.js
import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
// import { checkRole, checkPermission } from '../middlewares/auth.js';
// import { getUserProfile, updateUserProfile } from '../controllers/utilisateur.controller.js';
import { createUtilisateur, getUtilisateur, getAllUtilisateur , updateUtilisateur, deleteUtilisateur } from '../controllers/utilisateur.controller.js';

export const utilisateur = Router();

// // Middleware pour vérifier le rôle de l'utilisateur
// utilisateur.use(checkRole);

// // Route pour obtenir le profil de l'utilisateur
// utilisateur.get('/profile', checkPermission('view_profile'), getUserProfile);

// // Route pour mettre à jour le profil de l'utilisateur
// utilisateur.put('/profile', checkPermission('edit_profile'), updateUserProfile);


// Création Reponse
utilisateur.post('/', verifyToken, createUtilisateur);

// Lecture Reponse
utilisateur.get('/', verifyToken, getAllUtilisateur);
utilisateur.get('/:id', verifyToken, getUtilisateur);

//update Reponse
utilisateur.put('/:id', verifyToken , updateUtilisateur);

//delete Reponse
utilisateur.delete('/:id', verifyToken , deleteUtilisateur);

