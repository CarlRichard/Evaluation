import { sequelize } from "../database.js";
import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

export const Utilisateur = sequelize.define('utilisateur', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[0, 1]], // Assure que la valeur soit 0 ou 1
        }
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (utilisateur, options) => {
            // Hacher le mot de passe avant la création de l'utilisateur
            const hashedPassword = await bcrypt.hash(utilisateur.mot_de_passe, 10);
            utilisateur.mot_de_passe = hashedPassword;
        },
        beforeUpdate: async (utilisateur, options) => {
            if (utilisateur.mot_de_passe && utilisateur.mot_de_passe !== utilisateur._previousDataValues.mot_de_passe) {
                const hashedPassword = await bcrypt.hash(utilisateur.mot_de_passe, 10);
                utilisateur.mot_de_passe = hashedPassword;
            }
        }
    }
});