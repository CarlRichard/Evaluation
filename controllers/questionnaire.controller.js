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

// Lecture de tous les questionnaires ou un seul
export const getQuestionnaire = async (req, res) => {
  try {
    if (req.params.id) {
      const questionnaire = await Questionnaire.findByPk(req.params.id);

      if (!questionnaire) {
        return res.status(404).json({ message: 'Questionnaire non trouvé' });
      }

      return res.status(200).json({ questionnaire });
    } else {
      const questionnaires = await Questionnaire.findAll();
      return res.status(200).json({ questionnaires });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération des questionnaires', error: error.message });
  }
};

// Mise à jour d'un questionnaire
export const updateQuestionnaire = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire non trouvé' });
    }

    // Mise à jour
    await questionnaire.update({ title, description });

    return res.status(200).json({ message: 'Questionnaire mis à jour avec succès', questionnaire });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour', error: error.message });
  }
};

// Suppression d'un questionnaire
export const deleteQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;

    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire non trouvé' });
    }

    // Suppression
    await questionnaire.destroy();

    return res.status(200).json({ message: 'Questionnaire supprimé avec succès' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
  }
};
