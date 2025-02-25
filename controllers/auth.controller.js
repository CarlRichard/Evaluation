import jsonwebtoken from 'jsonwebtoken';
import { Utilisateur } from '../models/utilisateur.model.js';
import e from 'express';

export const register = async ( req, res) => {
    //ajouter un try catch
    const { email, mot_de_passe } = req.body;
    const utilisateur = await Utilisateur.create({ 
        email , 
        mot_de_passe 
    });
    res.json(utilisateur);
}

export const login = (req, res) => {
    const { email, mot_de_passe } = req.body;
    //check user en database
    const utilisateur = {id: 1, email: email};
    const accessToken = generateAccessToken(utilisateur);
    const refreshToken = generateRefreshToken(utilisateur);

    //ajoute le refreshToken dans un cookie
    res.cookie("refreshToken", refreshToken, {
        sameSite: 'Strict',
        secure : false,
        httpOnly: true
    } );
    //reponse du client avec le token
    res.json({ accessToken })
}

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