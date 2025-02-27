import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Utilisateur from "./utilisateur.model.js";

const Evaluation = sequelize.define("Evaluation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_evaluateur: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  id_evalue: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: "evaluation",
  timestamps: true
});

// Définition des relations
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_evaluateur", as: "evaluateur" });
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_evalue", as: "evalue" });

export default Evaluation;
