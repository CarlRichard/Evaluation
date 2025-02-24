import { Router } from "express";
import { authenticated, login, logout, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authentication = Router();

authentication.post( '/sign-up', register );
authentication.post( '/sign-in', login );
authentication.get( '/sign-out', logout );
authentication.get( '/authenticated', [verifyToken], authenticated);
