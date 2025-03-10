import Evaluation from "../models/evaluation.model.js";
import Question from "../models/question.model.js";
import Reponse from "../models/reponse.model.js";


//POST
export const createReponse = async (req, res) => {
  try {
    const { rep, id_question } = req.body;

        // Utiliser l'ID utilisateur du token
        const id_utilisateur = req.user.id; 

    // Créer une nouvelle réponse
    const reponse = await Reponse.create({
      rep,
      id_question,
      id_utilisateur
    });

    res.status(201).json({ message: "Réponse créée avec succès", reponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création de la réponse", error: error.message });
  }
};

//GEt
export const getAllReponse = async (req, res) => {
    try {
      const reponses = await Reponse.findAll({
        include: [
          { model: Question, attributes: ['titre'] }, 
        ]
           // Inclure la question associée
      });
  
      res.status(200).json({ reponses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération des réponses", error: error.message });
    }
  };

  //Get id
  export const getReponse = async (req, res) => {
    try {
      const { id } = req.params;
      const reponse = await Reponse.findByPk(id, {
        include: [
          { model: Question, attributes: ['titre'] }
        ]   // Inclure la question associée
      });
  
      if (!reponse) {
        return res.status(404).json({ message: "Réponse non trouvée" });
      }
  
      res.status(200).json({ reponse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération de la réponse", error: error.message });
    }
  };

  //put
  export const putReponse = async (req, res) => {
    try {
      const { id } = req.params;
      const { rep, id_question } = req.body;
  
      const reponse = await Reponse.findByPk(id);
  
      if (!reponse) {
        return res.status(404).json({ message: "Réponse non trouvée" });
      }
  
      // Mettre à jour la réponse
      reponse.rep = rep;
      reponse.id_question = id_question;
  
      await reponse.save();
  
      res.status(200).json({ message: "Réponse mise à jour avec succès", reponse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de la réponse", error: error.message });
    }
  };

  //Supp
  export const deleteReponse = async (req, res) => {
    try {
      const { id } = req.params;
      const reponse = await Reponse.findByPk(id);
  
      if (!reponse) {
        return res.status(404).json({ message: "Réponse non trouvée" });
      }
  
      await reponse.destroy();
  
      res.status(200).json({ message: "Réponse supprimée avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la suppression de la réponse", error: error.message });
    }
  };
  