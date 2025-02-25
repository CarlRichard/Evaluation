import Evaluation from "../models/evaluation.model.js";

export const createEvaluation = async (req, res) => {
  try {
    const { id_utilisateur, score } = req.body;

    // Créer l'évaluation
    const evaluation = await Evaluation.create({ id_utilisateur, score });

    res.status(201).json({ message: "Évaluation créée avec succès", evaluation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création de l'évaluation", error: error.message });
  }
};


export const getAllEvaluations = async (req, res) => {
    try {
      const evaluations = await Evaluation.findAll({
        include: [Utilisateur], // Inclure les informations de l'utilisateur
      });
  
      res.status(200).json({ evaluations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération des évaluations", error: error.message });
    }
  };

  export const getEvaluationById = async (req, res) => {
    try {
      const { id } = req.params;
      const evaluation = await Evaluation.findByPk(id, {
        include: [Utilisateur], // Inclure les informations de l'utilisateur
      });
  
      if (!evaluation) {
        return res.status(404).json({ message: "Évaluation non trouvée" });
      }
  
      res.status(200).json({ evaluation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération de l'évaluation", error: error.message });
    }
  };

  export const updateEvaluation = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_utilisateur, score } = req.body;
  
      const evaluation = await Evaluation.findByPk(id);
  
      if (!evaluation) {
        return res.status(404).json({ message: "Évaluation non trouvée" });
      }
  
      // Mettre à jour l'évaluation
      evaluation.id_utilisateur = id_utilisateur;
      evaluation.score = score;
  
      await evaluation.save();
  
      res.status(200).json({ message: "Évaluation mise à jour avec succès", evaluation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de l'évaluation", error: error.message });
    }
  };

  export const deleteEvaluation = async (req, res) => {
    try {
      const { id } = req.params;
      const evaluation = await Evaluation.findByPk(id);
  
      if (!evaluation) {
        return res.status(404).json({ message: "Évaluation non trouvée" });
      }
  
      await evaluation.destroy();
  
      res.status(200).json({ message: "Évaluation supprimée avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la suppression de l'évaluation", error: error.message });
    }
  };
      