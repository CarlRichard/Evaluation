import { DataTypes } from "sequelize";
import { sequelize } from "../database.js"; 

const Questionnaire = sequelize.define("Questionnaire", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: "questionnaire",
  timestamps: true
});

export default Questionnaire;
