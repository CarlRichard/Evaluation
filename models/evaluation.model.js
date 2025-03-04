import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Utilisateur from "./utilisateur.model.js";
import Reponse from "./reponse.model.js";
import Questionnaire from "./questionnaire.model.js"; // Import du modèle Questionnaire

const Evaluation = sequelize.define("Evaluation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_evaluateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  id_reponse: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Reponse,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  // Ajouter le champ id_questionnaire pour la relation avec le questionnaire
  id_questionnaire: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Questionnaire,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  note_formateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 16,
    },
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: false,
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
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_utilisateur", as: "evalue" });


export default Evaluation;
