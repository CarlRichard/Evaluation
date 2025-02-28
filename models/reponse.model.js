import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Question from "./question.model.js";

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
  id_question: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: "id",
    },
    onDelete: "CASCADE",
  }
}, {
  tableName: "reponse",
  timestamps: true
});

// Définition des relations
Reponse.belongsTo(Question, { foreignKey: "id_question" });

export default Reponse;
