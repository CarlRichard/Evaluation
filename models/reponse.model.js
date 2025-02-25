import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Question from "./question.model.js";
import Evaluation from "./evaluation.model.js";

const Reponse = sequelize.define("Reponse", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  texte: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_question: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  id_evaluation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Evaluation,
      key: "id",
    },
    onDelete: "CASCADE",
  }
}, {
  tableName: "reponse",
  timestamps: true
});

// Définition des relations
Question.hasMany(Reponse, { foreignKey: "id_question", onDelete: "CASCADE" });
Reponse.belongsTo(Question, { foreignKey: "id_question" });

Evaluation.hasMany(Reponse, { foreignKey: "id_evaluation", onDelete: "CASCADE" });
Reponse.belongsTo(Evaluation, { foreignKey: "id_evaluation" });

export default Reponse;
