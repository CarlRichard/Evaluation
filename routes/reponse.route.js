import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createReponse, getReponse, putReponse, deleteReponse} from '../controllers/reponse.controller.js';

export const Reponse = Router();

// Création Reponse
Reponse.post('/', verifyToken, createReponse);

// Lecture Reponse
Reponse.get('/', verifyToken, getReponse);
Reponse.get('/:id', verifyToken, getReponse);

//update Reponse
Reponse.put('/:id', verifyToken , putReponse);

//delete Reponse
Reponse.delete('/:id', verifyToken , deleteReponse);

