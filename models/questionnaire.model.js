import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Utilisateur from "./utilisateur.model.js"; 

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
  formation: {
    type: DataTypes.ENUM('Back-End', 'Front-End', 'CDA', 'PrépaNum', 'PrépaNum2', 'POA', ''),
    defaultValue: '',
    allowNull: true
  },
  id_utilisateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { 
      model: Utilisateur,
      key: "id",
    }
  },
}, {
  tableName: "questionnaire",
  timestamps: true,
});

export default Questionnaire;
