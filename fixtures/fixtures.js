import { sequelize } from "../database.js";
import Utilisateur from "../models/utilisateur.model.js";
import Questionnaire from "../models/questionnaire.model.js";
import Question from "../models/question.model.js";
import Reponse from "../models/reponse.model.js";
import Evaluation from "../models/evaluation.model.js";
import QuestionnaireQuestion from "../models/QuestionnaireQuestion.model.js";

(async () => {
  await sequelize.sync({ force: true }); // Réinitialiser la base de données

  // Création des utilisateurs
  const utilisateurs = await Utilisateur.bulkCreate([
    { nom: "Dupont", prenom: "Alice", email: "alice@example.com", role: 0, formation: "Back-End", mot_de_passe: "password" },
    { nom: "Martin", prenom: "Bob", email: "bob@example.com", role: 1, formation: "Front-End", mot_de_passe: "password" },
    { nom: "Leroy", prenom: "Charlie", email: "charlie@example.com", role: 0, formation: "CDA", mot_de_passe: "password" },
    { nom: "Durand", prenom: "Diana", email: "diana@example.com", role: 1, formation: "PrépaNum", mot_de_passe: "password" },
    { nom: "Bernard", prenom: "Eve", email: "eve@example.com", role: 0, formation: "POA", mot_de_passe: "password" },
  ]);

  // Création des questionnaires
  const questionnaires = await Questionnaire.bulkCreate([
    { titre: "Questionnaire 1", description: "Description 1", id_utilisateur: utilisateurs[1].id },
    { titre: "Questionnaire 2", description: "Description 2", id_utilisateur: utilisateurs[3].id },
  ]);

  // Création des questions
  const questions = await Question.bulkCreate([
    { titre: "Question A", description: "Desc A" },
    { titre: "Question B", description: "Desc B" },
    { titre: "Question C", description: "Desc C" },
    { titre: "Question D", description: "Desc D" },
    { titre: "Question E", description: "Desc E" },
  ]);

  // Association des questions aux questionnaires (avec une question commune)
  await QuestionnaireQuestion.bulkCreate([
    { id_questionnaire: questionnaires[0].id, id_question: questions[0].id },
    { id_questionnaire: questionnaires[0].id, id_question: questions[1].id },
    { id_questionnaire: questionnaires[0].id, id_question: questions[2].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[2].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[3].id },
    { id_questionnaire: questionnaires[1].id, id_question: questions[4].id },
  ]);

  // Un utilisateur répond à une question
  const reponse = await Reponse.create({ rep: 10, id_question: questions[0].id, id_utilisateur: utilisateurs[2].id });

  // Un formateur évalue la réponse
  await Evaluation.create({
    id_evaluateur: utilisateurs[1].id,
    id_reponse: reponse.id,
    note_formateur: 8,
    commentaire: "Bonne réponse",
    id_questionnaire: questionnaires[0].id,
    id_evalue: utilisateurs[2].id,
  });

  console.log("Fixtures insérées avec succès");
  process.exit();
})();
