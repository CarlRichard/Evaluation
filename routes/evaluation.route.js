import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js"; 
import { createEvaluation, getAllEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation } from "../controllers/evaluation.controller.js";

export const evaluation = Router();

// Création d'une évaluation
evaluation.post("/", verifyToken, createEvaluation);

// Récupérer toutes les évaluations
evaluation.get("/", verifyToken, getAllEvaluations);

// Récupérer une évaluation par ID
evaluation.get("/:id", verifyToken, getEvaluationById);

// Mise à jour d'une évaluation
evaluation.put("/:id", verifyToken, updateEvaluation);

// Suppression d'une évaluation
evaluation.delete("/:id", verifyToken, deleteEvaluation);