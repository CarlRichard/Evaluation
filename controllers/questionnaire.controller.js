import Questionnaire from "../models/questionnaire.model.js";

// post
export const createQuestionnaire = async (req, res) => {
  try {
    const { title, description, id_utilisateur } = req.body;

    // Créer le questionnaire
    const questionnaire = await Questionnaire.create({
      title,
      description,
      id_utilisateur,
    });

    res.status(201).json({ message: "Questionnaire créé avec succès", questionnaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du questionnaire", error: error.message });
  }
};

//get
export const getAllQuestionnaire = async (req, res) => {
  try {
    const questionnaires = await Questionnaire.findAll({
      include: [{ model: Utilisateur, attributes: ['name', 'email'] }], // Inclure l'utilisateur qui a créé le questionnaire
    });

    res.status(200).json({ questionnaires });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des questionnaires", error: error.message });
  }
};

//get id
export const getQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const questionnaire = await Questionnaire.findByPk(id, {
      include: [{ model: Utilisateur, attributes: ['name', 'email'] }], // Inclure l'utilisateur qui a créé le questionnaire
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

//put
export const updateQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, id_utilisateur } = req.body;

    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({ message: "Questionnaire non trouvé" });
    }

    // Mettre à jour les informations du questionnaire
    questionnaire.title = title;
    questionnaire.description = description;
    questionnaire.id_utilisateur = id_utilisateur;

    await questionnaire.save();

    res.status(200).json({ message: "Questionnaire mis à jour avec succès", questionnaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour du questionnaire", error: error.message });
  }
};

//delete
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
