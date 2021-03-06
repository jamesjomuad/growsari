const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");
const { User } = require("../models");

async function signin(req, res) {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            attributes: ["id", "username", "email", "fullName", "password"],
            where: { username },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const response = {
                ...user.dataValues,
                token: auth.createToken(user.id),
            };
            delete response.password;
            res.json(response);
        } else {
            return res.sendStatus(403);
        }
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

async function signup(req, res) {
    const payload = req.body;

    try {
        payload.password = await bcrypt.hash(payload.password, 10);
        const result = await User.create(payload);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

async function get(req, res) {
    // const payload = req.body;
    try {
        const result = await User.findAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

async function only(req, res) {
    const userId = await auth.userId(req, res);
    try {
        const result = await User.findByPk(userId, {
            attributes: ["id", "fullName", "email", "username"],
        });
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { signin, signup, get, only };
