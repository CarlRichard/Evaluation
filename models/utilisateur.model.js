import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import bcrypt from 'bcryptjs'; 

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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[0, 1]], //  0 = etudiant ou 1 = formateur
        }
    },
    formation: {
        type: DataTypes.ENUM('Back-End', 'Front-End', 'CDA', 'PrépaNum', 'PrépaNum2', 'POA'),
        allowNull: false
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

export default Utilisateur;
