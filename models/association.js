import { sequelize } from '../database.js'; 
import Utilisateur from './utilisateur.model.js';  
import Questionnaire from './questionnaire.model.js';  
import Question from './question.model.js';
import Reponse from './reponse.model.js';
import Evaluation from './evaluation.model.js';

// Relation entre Utilisateur et Questionnaire
Utilisateur.hasMany(Questionnaire, {
  foreignKey: 'id_utilisateur',
  sourceKey: 'id'
});

// Relation entre questionnaire et Question
Questionnaire.hasMany(Question, {
  foreignKey: 'id_questionnaire',
  sourceKey: 'id'
});

//relation pour rponse avec question et eval
Question.hasMany(Reponse, { 
  foreignKey: "id_question", 
  onDelete: "CASCADE",
  sourceKey: 'id'
});

// Evaluation.hasMany(Reponse, { 
//   foreignKey: "id_evaluation",
//   onDelete: "CASCADE",
//   sourceKey: 'id'
// });

//eval avec user 2 fois
Utilisateur.hasMany(Evaluation, {
  foreignKey: "id_evaluateur", 
  onDelete: "CASCADE",
  sourceKey: 'id' 
});

Utilisateur.hasMany(Evaluation, {
  foreignKey: "id_evalue",
  onDelete: "CASCADE",
  sourceKey: 'id' 
});