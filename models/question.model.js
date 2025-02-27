import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

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

export default Question;
