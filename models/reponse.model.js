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
  rep: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_question: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: "id",
    },
    onDelete: "CASCADE",
  }
  //,
  // id_evaluation: { // Clé étrangère
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Evaluation,
  //     key: "id",
  //   },
  //   onDelete: "CASCADE",
  // }
}, {
  tableName: "reponse",
  timestamps: true
});

// Définition des relations
Reponse.belongsTo(Question, { foreignKey: "id_question" });
// Reponse.belongsTo(Evaluation, { foreignKey: "id_evaluation" });

export default Reponse;
