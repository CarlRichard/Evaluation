import Question from '../models/question.model.js';
import Questionnaire from '../models/questionnaire.model.js';

// Création d'une question associée à un questionnaire
export const createQuestion = async (req, res) => {
  try {
    const { title, description, questionnaireId } = req.body;

    // Vérifie si le questionnaire existe
    const questionnaire = await Questionnaire.findByPk(questionnaireId);
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire non trouvé' });
    }

    // Crée la question et l'associe au questionnaire
    const question = await Question.create({
      title,
      description,
      questionnaireId
    });

    return res.status(201).json({ message: 'Question créée avec succès', question });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la création de la question', error: error.message });
  }
};

// Récupérer une ou toutes les questions
export const getQuestion = async (req, res) => {
  try {
    if (req.params.id) {
      // Recherche une seule question par ID
      const { id } = req.params;
      const question = await Question.findByPk(id);

      if (!question) {
        return res.status(404).json({ message: 'Question non trouvée' });
      }

      return res.status(200).json({ question });
    } else {
      // Récupère toutes les questions
      const questions = await Question.findAll();
      return res.status(200).json({ questions });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération des questions', error: error.message });
  }
};

// Mise à jour d'une question
export const putQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Vérifie si la question existe
    const question = await Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }

    // Mise à jour de la question
    question.title = title || question.title;
    question.description = description || question.description;

    await question.save();

    return res.status(200).json({ message: 'Question mise à jour avec succès', question });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour de la question', error: error.message });
  }
};

// Suppression d'une question
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifie si la question existe
    const question = await Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }

    // Suppression de la question
    await question.destroy();

    return res.status(200).json({ message: 'Question supprimée avec succès' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la suppression de la question', error: error.message });
  }
};
