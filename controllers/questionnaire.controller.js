import Question from "../models/question.model.js";
import Questionnaire from "../models/questionnaire.model.js";
import QuestionnaireQuestion from "../models/QuestionnaireQuestion.model.js";
import Utilisateur from "../models/utilisateur.model.js";
import jwt from "jsonwebtoken";

// 🔹 Associer une question à un questionnaire
export const addQuestionToQuestionnaire = async (req, res) => {
  try {
      const { questionnaireId, questionId } = req.params;

      // Vérifier si les deux existent
      const questionnaire = await Questionnaire.findByPk(questionnaireId);
      const question = await Question.findByPk(questionId);

      if (!questionnaire || !question) {
          return res.status(404).json({ message: "Questionnaire ou question introuvable." });
      }

      // Associer via la table de jointure
      await QuestionnaireQuestion.create({
          id_questionnaire: questionnaireId,
          id_question: questionId,
      });

      res.status(201).json({ message: "Question associée au questionnaire avec succès !" });
  } catch (error) {
      console.error("Erreur lors de l'association :", error);
      res.status(500).json({ message: "Erreur interne du serveur." });
  }
}; 

//recup info table jointure
export const getQuestionsByQuestionnaire = async (req, res) => {
  try {
      const { questionnaireId } = req.params;

      const questionnaire = await Questionnaire.findByPk(questionnaireId, {
          include: {
              model: Question,
              through: { attributes: [] } // Exclut les champs de la table de jointure
          },
      });

      if (!questionnaire) {
          return res.status(404).json({ message: "Questionnaire introuvable." });
      }

      res.json(questionnaire.Questions); // Sequelize stocke les résultats sous `questionnaire.Questions`
  } catch (error) {
      console.error("Erreur :", error);
      res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

// post
export const createQuestionnaire = async (req, res) => {
  try {
    const { titre, description, formation } = req.body;

    // Utiliser l'ID utilisateur du token
    const id_utilisateur = req.user.id; 

    // Créer le questionnaire
    const questionnaire = await Questionnaire.create({
      titre,
      description,
      id_utilisateur,
      formation
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
          attributes: ['nom','prenom', 'email'] 
        },
        { 
          model: Question, 
          attributes: ['titre', 'description'] 
        }
      ]
    });

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
  const { id } = req.params;  // Récupération de l'ID depuis les paramètres de la requête
  const { titre, description, formation } = req.body;  // Récupération des données du corps de la requête

  try {
      // Trouver le questionnaire par ID
      const questionnaire = await Questionnaire.findByPk(id);

      if (!questionnaire) {
          return res.status(404).json({ message: "Questionnaire non trouvé" });
      }

      // Mettre à jour les champs du questionnaire
      questionnaire.titre = titre || questionnaire.titre;  // Mettre à jour si un nouveau titre est fourni
      questionnaire.description = description || questionnaire.description;  // Mettre à jour si une nouvelle description est fournie
      questionnaire.formation = formation || questionnaire.formation;  // Mettre à jour si une nouvelle formation est fournie

      // Sauvegarder les modifications dans la base de données
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


export const getQuestionnairesByUserFormation = async (req, res) => {
    try {
        // Récupérer le token de l'en-tête Authorization
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Token manquant" });
        }

        // Décoder le token pour récupérer l'ID de l'utilisateur
        const decoded = jwt.verify(token, "jetonTKN"); // Remplace par ta clé secrète JWT
        const userId = decoded.id;

        // Récupérer l'utilisateur et sa formation
        const utilisateur = await Utilisateur.findByPk(userId);

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const formation = utilisateur.formation;

        // Récupérer les questionnaires avec la même formation
        const questionnaires = await Questionnaire.findAll({
            where: { formation },
        });

        return res.status(200).json(questionnaires);
    } catch (error) {
        console.error("Erreur lors de la récupération des questionnaires :", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
};
