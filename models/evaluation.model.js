import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Utilisateur from "./utilisateur.model.js";
import Reponse from "./reponse.model.js";
import Questionnaire from "./questionnaire.model.js"; 

const Evaluation = sequelize.define('Evaluation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_evaluateur: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_reponse: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  note_formateur: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  commentaire: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_questionnaire: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_evalue: {  
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  tableName: "evaluation",
  timestamps: true,
});

// Définition des relations
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_evaluateur", as: "evaluateur" });
Evaluation.belongsTo(Reponse, { foreignKey: "id_reponse", as: "reponse" });
Evaluation.belongsTo(Questionnaire, { foreignKey: "id_questionnaire", as: "questionnaire" }); // Nouvelle relation
// Ajoutez ceci dans votre modèle Evaluation
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_evalue", as: "evalue" });


export default Evaluation; 
