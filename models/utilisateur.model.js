import { sequelize } from "../database.js"; 
import { DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';

const Utilisateur = sequelize.define('utilisateur', {
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
    unique: {
      args: true,
      msg: 'L\'email doit être unique.'
    }
  },    
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isIn: [[0, 1]], // 0 = etudiant ou 1 = formateur
    }
  },
  formation: {
    type: DataTypes.ENUM('Back-End', 'Front-End', 'CDA', 'PrépaNum', 'PrépaNum2', 'POA', ''),
    defaultValue: '',
    allowNull: true
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "utilisateurs",
  timestamps: true,
  hooks: {
    beforeCreate: async (utilisateur, options) => {
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
