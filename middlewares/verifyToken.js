import jsonwebtoken from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const authorization = req.header("Authorization"); 
        if (!authorization) { return res.status(401).json({ message: "Access denied!" })}
        //authorization = "Bearer {token}" => ["Bearer", "{token}"] => "{token}"
        const token = authorization.split(' ')[1]; 
        if(!token || token === "null") return res.status(401).json({ message: "Token not provided!" });
        jsonwebtoken.verify(
            token, 
            process.env.JWT_SECRET,
            {},
            (err, payload) => {
                if(err) {
                    const cookie = req.cookies.refreshToken;
                    jsonwebtoken.verify(cookie, process.env.JWT_REFRESH, {}, (err, data) => {
                        if(err) throw Error(err);
                        req.refresh = true;
                        req.user = data;
                    });
                } else {
                    req.user = payload;
                }
                next();
            });
    } catch (err) {
        return res.status(403).json({ 
            message: "Invalid token", 
            error: err.message
        }); 
    }
}
