import { DataTypes } from "sequelize";
import { sequelize } from "../database.js"; 
import Utilisateur from './utilisateur.model.js';

const Questionnaire = sequelize.define("Questionnaire", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  id_utilisateur: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur, // Référence au modèle User
      key: "id",
    },
    onDelete: "CASCADE", // Si l'utilisateur est supprimé, ses questionnaires le sont aussi
  }
}, {
  tableName: "questionnaire",
  timestamps: true
});

export default Questionnaire;
