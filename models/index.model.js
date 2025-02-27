import Questionnaire from "./questionnaire.model.js";
import Question from "./question.model.js";

// Définir les relations après l'importation des modèles
Questionnaire.hasMany(Question, { foreignKey: "id_questionnaire" });
Question.belongsTo(Questionnaire, { foreignKey: "id_questionnaire" });

export { Questionnaire, Question };
