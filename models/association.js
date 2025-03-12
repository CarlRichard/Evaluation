import Questionnaire from "./questionnaire.model.js";
import Question from "./question.model.js";
import QuestionnaireQuestion from "./QuestionnaireQuestion.model.js";
import Utilisateur from "./utilisateur.model.js";
import Reponse from "./reponse.model.js";
import Evaluation from "./evaluation.model.js";

// Un utilisateur peut créer plusieurs questionnaires
Utilisateur.hasMany(Questionnaire, { foreignKey: "id_utilisateur" });
Questionnaire.belongsTo(Utilisateur, { foreignKey: "id_utilisateur" });

// Questionnaire et Question via la table de jointure
Questionnaire.belongsToMany(Question, {
  through: QuestionnaireQuestion,
  foreignKey: "id_questionnaire",
  otherKey: "id_question",
});

Question.belongsToMany(Questionnaire, {
  through: QuestionnaireQuestion,
  foreignKey: "id_question",
  otherKey: "id_questionnaire",
});

// Une question peut avoir plusieurs réponses
Question.hasMany(Reponse, { foreignKey: "id_question", onDelete: "CASCADE" });
Reponse.belongsTo(Question, { foreignKey: "id_question" });

//Une réponse peut avoir plusieurs évaluations
Reponse.hasMany(Evaluation, { foreignKey: "id_reponse" });
Evaluation.belongsTo(Reponse, { foreignKey: "id_reponse" });

//Un utilisateur peut évaluer plusieurs réponses
Utilisateur.hasMany(Evaluation, { foreignKey: "id_evaluateur" });
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_evaluateur" });

// Une évaluation appartient à un questionnaire
Questionnaire.hasMany(Evaluation, { foreignKey: "id_questionnaire", onDelete: "CASCADE" });
Evaluation.belongsTo(Questionnaire, { foreignKey: "id_questionnaire", onDelete: "CASCADE" });

// Une réponse est envoyer par un utilisateur
Utilisateur.hasMany(Reponse, { foreignKey: "id_utilisateur", onDelete: "CASCADE" });
Reponse.belongsTo(Utilisateur, { foreignKey: "id_utilisateur" , onDelete: "CASCADE" });