import { sequelize } from '../database.js'; 
import Utilisateur from './utilisateur.model.js';  
import Questionnaire from './questionnaire.model.js';  
import Question from './question.model.js';

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

