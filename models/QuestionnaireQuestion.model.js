import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

const QuestionnaireQuestion = sequelize.define("QuestionnaireQuestion", {
  id_questionnaire: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_question: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
}, {
  tableName: "questionnaire_questions",
  timestamps: false,
});

export default QuestionnaireQuestion;
