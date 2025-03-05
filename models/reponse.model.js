import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Question from "./question.model.js";
import Utilisateur from "./utilisateur.model.js"; // Import du modèle Utilisateur

const Reponse = sequelize.define("Reponse", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rep: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 16
    }
  },
  id_question: { // Clé étrangère vers Question
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  id_utilisateur: { // Nouvelle clé étrangère vers Utilisateur
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: "id"
    },
    onDelete: "CASCADE"
  }
}, {
  tableName: "reponse",
  timestamps: true
});

// Définition des relations
Reponse.belongsTo(Question, { foreignKey: "id_question", as: 'question' });
Reponse.belongsTo(Utilisateur, { foreignKey: "id_utilisateur", as: "utilisateur" }); // Ajout de la relation avec Utilisateur

export default Reponse;
