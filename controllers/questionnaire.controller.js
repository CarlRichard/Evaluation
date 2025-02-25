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
// Lecture de tous les questionnaires
export const getQuestionnaire = async (req, res) => {
    try {
      if (req.params.id) {
        // Si un ID est fourni, recherche un questionnaire spécifique
        const questionnaire = await Questionnaire.findByPk(req.params.id);
  
        if (!questionnaire) {
          return res.status(404).json({ message: 'Questionnaire non trouvé' });
        }
  
        return res.status(200).json({ questionnaire });
      } else {
        // Sinon, retourne tous les questionnaires
        const questionnaires = await Questionnaire.findAll();
        return res.status(200).json({ questionnaires });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la récupération des questionnaires', error: error.message });
    }
  };