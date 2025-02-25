import { Router } from "express";
import { authenticated, login, logout, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authentication = Router();

//crée un user
authentication.post( '/sign-up', register );

//login
authentication.post( '/sign-in', login );

//deconnexion
authentication.get( '/sign-out', logout );

//veriftoken
authentication.get( '/authenticated', [verifyToken], authenticated);
