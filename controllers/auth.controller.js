import jsonwebtoken from 'jsonwebtoken';
// auth.controller.js
import Utilisateur from '../models/utilisateur.model.js'; // Utilisation de l'export par défaut

import e from 'express';

import bcrypt from 'bcryptjs'; // Assurez-vous d'importer bcryptjs

export const register = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        // Hash du mot de passe avant d'enregistrer
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

        // Créer l'utilisateur avec le mot de passe haché
        const utilisateur = await Utilisateur.create({ 
            email, 
            mot_de_passe: hashedPassword 
        });

        res.json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur", error });
    }
};


export const login = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        // Trouver l'utilisateur par email
        const utilisateur = await Utilisateur.findOne({ where: { email } });

        if (!utilisateur) {
            return res.status(400).json({ message: "Utilisateur non trouvé" });
        }

        // Comparer le mot de passe
        const isPasswordValid = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        // Si l'authentification réussit, générer le token
        const accessToken = generateAccessToken(utilisateur);
        const refreshToken = generateRefreshToken(utilisateur);

        // Ajouter le refresh token dans un cookie sécurisé
        res.cookie("refreshToken", refreshToken, {
            sameSite: 'Strict',
            secure: process.env.NODE_ENV === 'production', // Sécurisé en production
            httpOnly: true
        });

        // Retourner l'accessToken au client
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error });
    }
};


export const logout = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ message: "You have been logged out" });
}

export const authenticated = (req, res) => {
    let accessToken = '';
    if(req.refresh) {
        accessToken = generateAccessToken(req.utilisateur);
    }
    return res.json({ connected: true, accessToken });
}

const generateAccessToken = (utilisateur) => {
    return jsonwebtoken.sign(
        {id: utilisateur.id , email: utilisateur.email}, 
        process.env.JWT_SECRET,
        { expiresIn: '1h' });
} 

const generateRefreshToken = (utilisateur) => {
    return jsonwebtoken.sign(
        {id: utilisateur.id, email: utilisateur.email}, 
        process.env.JWT_REFRESH,
        { expiresIn: '7d' }
    );
}