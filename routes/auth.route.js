import { Router } from "express";
import { authenticated, login, logout, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authentication = Router();

//crée un user
authentication.post( '/enrengistrement', register );

//login
authentication.post( '/connexion', login );

//deconnexion
authentication.get( '/deconnexion', logout );

//veriftoken
authentication.get( '/authenticated', [verifyToken], authenticated);
