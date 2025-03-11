import { sequelize } from "../database.js";
import Utilisateur from "../models/utilisateur.model.js";
import Questionnaire from "../models/questionnaire.model.js";
import Question from "../models/question.model.js";
import Reponse from "../models/reponse.model.js";
import Evaluation from "../models/evaluation.model.js";
import QuestionnaireQuestion from "../models/QuestionnaireQuestion.model.js";
import bcrypt from "bcryptjs";

(async () => {
  await sequelize.sync(); // Réinitialiser la base de données

  const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }; 

  // Création des utilisateurs
  const utilisateurs = await Utilisateur.bulkCreate([
    { nom: "Dupont", prenom: "Alice", email: "alice@example.com", role: 0, formation: "Back-End", mot_de_passe: await hashPassword("password") },
    { nom: "Martin", prenom: "Bob", email: "bob@example.com", role: 1, formation: "Front-End", mot_de_passe: await hashPassword("password") },
    { nom: "Leroy", prenom: "Charlie", email: "charlie@example.com", role: 0, formation: "CDA", mot_de_passe: await hashPassword("password") },
    { nom: "Durand", prenom: "Diana", email: "diana@example.com", role: 1, formation: "PrépaNum", mot_de_passe: await hashPassword("password") },
    { nom: "Bernard", prenom: "Eve", email: "eve@example.com", role: 0, formation: "POA", mot_de_passe: await hashPassword("password") },
    { nom: "Robert", prenom: "David", email: "david@example.com", role: 0, formation: "Back-End", mot_de_passe: await hashPassword("password") },
    { nom: "Smith", prenom: "Eve", email: "eve.smith@example.com", role: 1, formation: "Front-End", mot_de_passe: await hashPassword("password") },
  ]);

  // Création des questionnaires
  const questionnaires = await Questionnaire.bulkCreate([
    { titre: "Questionnaire 1", description: "Description 1", id_utilisateur: utilisateurs[1].id, formation: "Back-End" },
    { titre: "Questionnaire 2", description: "Description 2", id_utilisateur: utilisateurs[3].id, formation: "Front-End" },
    { titre: "Questionnaire 3", description: "Description 3", id_utilisateur: utilisateurs[4].id, formation: "CDA" },
    { titre: "Questionnaire 4", description: "Description 4", id_utilisateur: utilisateurs[2].id, formation: "PrépaNum" },
  ]);

  // Création des questions
  const questions = await Question.bulkCreate([
    { titre: "Question A", description: "Desc A" },
    { titre: "Question B", description: "Desc B" },
    { titre: "Question C", description: "Desc C" },
    { titre: "Question D", description: "Desc D" },
    { titre: "Question E", description: "Desc E" },
    { titre: "Question F", description: "Desc F" },
    { titre: "Question G", description: "Desc G" },
  ]);

  // Association des questions aux questionnaires
  await QuestionnaireQuestion.bulkCreate([
    { id_questionnaire: questionnaires[0].id, id_question: questions[0].id },
    { id_questionnaire: questionnaires[0].id, id_question: questions[1].id },
    { id_questionnaire: questionnaires[0].id, id_question: questions[2].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[2].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[3].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[4].id },
    { id_questionnaire: questionnaires[2].id, id_question: questions[4].id },
    { id_questionnaire: questionnaires[2].id, id_question: questions[5].id },
    { id_questionnaire: questionnaires[3].id, id_question: questions[6].id },
  ]);

  // Création des réponses
  const reponses = await Reponse.bulkCreate([
    { rep: 8, id_question: questions[0].id, id_utilisateur: utilisateurs[2].id },
    { rep: 7, id_question: questions[1].id, id_utilisateur: utilisateurs[3].id },
    { rep: 6, id_question: questions[2].id, id_utilisateur: utilisateurs[4].id },
    { rep: 9, id_question: questions[3].id, id_utilisateur: utilisateurs[1].id },
    { rep: 10, id_question: questions[4].id, id_utilisateur: utilisateurs[2].id },
    { rep: 5, id_question: questions[5].id, id_utilisateur: utilisateurs[3].id },
    { rep: 4, id_question: questions[6].id, id_utilisateur: utilisateurs[5].id },
  ]);

  // Création des évaluations
  await Evaluation.bulkCreate([
    { id_evaluateur: utilisateurs[1].id, id_reponse: reponses[0].id, note_formateur: 8, commentaire: "Bonne réponse", id_questionnaire: questionnaires[0].id, id_evalue: utilisateurs[2].id },
    { id_evaluateur: utilisateurs[2].id, id_reponse: reponses[1].id, note_formateur: 7, commentaire: "Réponse correcte", id_questionnaire: questionnaires[1].id, id_evalue: utilisateurs[3].id },
    { id_evaluateur: utilisateurs[3].id, id_reponse: reponses[2].id, note_formateur: 6, commentaire: "Réponse acceptable", id_questionnaire: questionnaires[2].id, id_evalue: utilisateurs[4].id },
    { id_evaluateur: utilisateurs[4].id, id_reponse: reponses[3].id, note_formateur: 9, commentaire: "Réponse parfaite", id_questionnaire: questionnaires[3].id, id_evalue: utilisateurs[1].id },
    { id_evaluateur: utilisateurs[5].id, id_reponse: reponses[4].id, note_formateur: 10, commentaire: "Excellente réponse", id_questionnaire: questionnaires[0].id, id_evalue: utilisateurs[2].id },
    { id_evaluateur: utilisateurs[6].id, id_reponse: reponses[5].id, note_formateur: 5, commentaire: "Réponse moyenne", id_questionnaire: questionnaires[1].id, id_evalue: utilisateurs[3].id },
  ]);

  console.log("Fixtures insérées avec succès");
  process.exit();
})();
