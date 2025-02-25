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
      model: Utilisateur, 
      key: "id",
    },
    onDelete: "CASCADE", 
  }
}, {
  tableName: "questionnaire",
  timestamps: true
});

export default Questionnaire;
