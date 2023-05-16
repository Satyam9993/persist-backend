const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if(!token){
            return res.status(403).send("Access Denied");
        }
        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(verified);
        req.user = verified.user;
        next();
    } catch (err) {
        res.status(500).json({ error : err})
    }
}

module.exports = verifyToken;