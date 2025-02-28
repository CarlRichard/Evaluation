import Question from "../models/question.model.js";
import Questionnaire from "../models/questionnaire.model.js";

//post
export const createQuestion = async (req, res) => {
    try {
        const { titre, description, id_questionnaire } = req.body;

        // Créer la question
    
        const question = await Question.create({ titre, description, id_questionnaire });

        res.status(201).json({ message: "Question créée avec succès", question });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de la question", error: error.message });
    }
};

//get
export const getAllQuestion = async (req, res) => {
    try {
        const questions = await Question.findAll({
            include: [{ model: Questionnaire, attributes: ['titre'] }], // Inclure le questionnaire lié
        });

        res.status(200).json({ questions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des questions", error: error.message });
    }
};

//get id
export const getQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id, {
            include: [{ model: Questionnaire, attributes: ['titre'] }], // Inclure le questionnaire lié
        });

        if (!question) {
            return res.status(404).json({ message: "Question non trouvée" });
        }

        res.status(200).json({ question });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de la question", error: error.message });
    }
};

//put
export const putQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { titre, description, id_questionnaire } = req.body;

        const question = await Question.findByPk(id);

        if (!question) {
            return res.status(404).json({ message: "Question non trouvée" });
        }

        // Mettre à jour la question
        question.titre = titre;
        question.description = description;
        question.id_questionnaire = id_questionnaire;

        await question.save();

        res.status(200).json({ message: "Question mise à jour avec succès", question });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de la question", error: error.message });
    }
};

//supp
export const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id);

        if (!question) {
            return res.status(404).json({ message: "Question non trouvée" });
        }

        await question.destroy();

        res.status(200).json({ message: "Question supprimée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de la question", error: error.message });
    }
};
