import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Utilisateur from "./Utilisateur.model.js";

const Evaluation = sequelize.define("Evaluation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_utilisateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: "evaluation",
  timestamps: true
});

// Définition des relations
User.hasMany(Evaluation, { foreignKey: "id_utilisateur", onDelete: "CASCADE" });
Evaluation.belongsTo(Utilisateur, { foreignKey: "id_utilisateur" });

export default Evaluation;
