import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Questionnaire from "./questionnaire.model.js";

const Question = sequelize.define("Question", {
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
  id_questionnaire: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "questionnaire",
      key: "id",
    },
    onDelete: "CASCADE",
  },
}, {
  tableName: "questions",
  timestamps: true,
});

// relation 
Question.belongsTo(Questionnaire, { 
  foreignKey: "id_questionnaire",
  targetKey: "id" 
});

export default Question;
