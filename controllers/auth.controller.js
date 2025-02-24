import jsonwebtoken from 'jsonwebtoken';

export const login = (req, res) => {
    const { username, password } = req.body;
    //check user en database
    const user = {id: 1, username};
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

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
        accessToken = generateAccessToken(req.user);
    }
    return res.json({ connected: true, accessToken });
}

const generateAccessToken = (user) => {
    return jsonwebtoken.sign(
        {id: user.id , username: user.username}, 
        process.env.JWT_SECRET,
        { expiresIn: '15m' });
} 

const generateRefreshToken = (user) => {
    return jsonwebtoken.sign(
        {id: user.id, username: user.username }, 
        process.env.JWT_REFRESH,
        { expiresIn: '7d' }
    );
}