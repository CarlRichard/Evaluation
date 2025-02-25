import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { createReponse, getReponse,getAllReponse, putReponse, deleteReponse} from '../controllers/reponse.controller.js';

export const reponse = Router();

// Création Reponse
reponse.post('/', verifyToken, createReponse);

// Lecture Reponse
reponse.get('/', verifyToken, getAllReponse);
reponse.get('/:id', verifyToken, getReponse);

//update Reponse
reponse.put('/:id', verifyToken , putReponse);

//delete Reponse
reponse.delete('/:id', verifyToken , deleteReponse);

