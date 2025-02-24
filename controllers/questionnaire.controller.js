import Questionnaire from '../models/questionnaire.model.js';

// Création d'un questionnaire
export const createQuestionnaire = async (req, res) => {
  try {
    const { title, description } = req.body;
    const questionnaire = await Questionnaire.create({ title, description });
    res.status(201).json({ message: "Questionnaire créé avec succès", questionnaire });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création", error });
  }
};

// Récupérer un questionnaire par ID
export const getQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const questionnaire = await Questionnaire.findByPk(id);
    if (!questionnaire) {
      return res.status(404).json({ message: "Questionnaire non trouvé" });
    }
    res.status(200).json({ questionnaire });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error });
  }
};
