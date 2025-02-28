import Question from "../models/question.model.js";
import Questionnaire from "../models/questionnaire.model.js";
import Utilisateur from "../models/utilisateur.model.js";

// post
export const createQuestionnaire = async (req, res) => {
  try {
    const { titre, description } = req.body;

    // Utiliser l'ID utilisateur du token
    const id_utilisateur = req.user.id; 

    // Créer le questionnaire
    const questionnaire = await Questionnaire.create({
      titre,
      description,
      id_utilisateur
    });

    res.status(201).json({ message: "Questionnaire créé avec succès", questionnaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du questionnaire", error: error.message });
  }
};


// get - Récupérer tous les questionnaires avec leurs questions et l'utilisateur qui les a créés
export const getAllQuestionnaire = async (req, res) => {
  try {
    const questionnaires = await Questionnaire.findAll({
      include: [
        { 
          model: Utilisateur, 
          attributes: ['nom','prenom', 'email'] // Inclure l'utilisateur qui a créé le questionnaire
        },
        { 
          model: Question, 
          attributes: ['titre', 'description'] // Inclure les questions liées au questionnaire
        }
      ]
    });

    console.log(questionnaires); // Vérifier la structure des questionnaires

    res.status(200).json({ questionnaires });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des questionnaires", error: error.message });
  }
};

// get id - Récupérer un questionnaire par son ID avec l'utilisateur et ses questions
export const getQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const questionnaire = await Questionnaire.findByPk(id, {
      include: [
        {
          model: Utilisateur, attributes: ['nom', 'prenom', 'email'] 
        },
        { 
          model: Question, attributes: ['titre', 'description'] 
        }
      ]
    });

    if (!questionnaire) {
      return res.status(404).json({ message: "Questionnaire non trouvé" });
    }

    res.status(200).json({ questionnaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération du questionnaire", error: error.message });
  }
};

// put - Mettre à jour un questionnaire
export const updateQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description } = req.body;

    // Trouver le questionnaire
    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({ message: "Questionnaire non trouvé" });
    }

    // Vérifier si l'utilisateur a le droit de modifier ce questionnaire
    if (questionnaire.id_utilisateur !== req.user.id) {
      return res.status(403).json({ message: "Vous n'avez pas la permission de modifier ce questionnaire" });
    }

    // Mettre à jour les informations du questionnaire
    questionnaire.titre = titre;
    questionnaire.description = description;

    await questionnaire.save();

    res.status(200).json({ message: "Questionnaire mis à jour avec succès", questionnaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour du questionnaire", error: error.message });
  }
};


// delete - Supprimer un questionnaire
export const deleteQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({ message: "Questionnaire non trouvé" });
    }

    await questionnaire.destroy();

    res.status(200).json({ message: "Questionnaire supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression du questionnaire", error: error.message });
  }
};
