const jwt = require("jsonwebtoken");
const token_secret = "ErVGY39nT52NzHT";

function createToken(username) {
    var maxAge = 3 * 24 * 60 * 60;
    return jwt.sign({ username }, token_secret, {
        expiresIn: maxAge,
    });
}

function verified(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, token_secret, (err, user) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    });
}

module.exports = { createToken, verified };
