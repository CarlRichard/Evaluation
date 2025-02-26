import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

// Définir d'abord le modèle Questionnaire sans la relation
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
  id_utilisateur: { // Clé étrangère
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "utilisateurs", // Nom de la table dans la base de données
      key: "id",
    },
    onDelete: "CASCADE", 
  }
}, {
  tableName: "questionnaire",
  timestamps: true
});

// Définir la relation après la définition du modèle Questionnaire
Questionnaire.associate = function(models) {
  Questionnaire.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateur' });
};

export default Questionnaire;
