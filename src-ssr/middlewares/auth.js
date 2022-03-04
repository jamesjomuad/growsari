const jwt = require("jsonwebtoken");
const token_secret = "ErVGY39nT52NzHT";

function createToken(id) {
    var maxAge = 3 * 24 * 60 * 60;
    return jwt.sign({ id }, token_secret, {
        expiresIn: maxAge,
    });
}

function verified(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, token_secret, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;

        console.log("User: ", user);

        next();
    });
}

async function userId(req, res) {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        const result = await jwt.verify(token, token_secret);
        return result.id;
    } catch (error) {}
}

module.exports = { createToken, verified, userId };
