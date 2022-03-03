const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const secretKey = "ErVGY39nT52NzHT";

const { Op } = require("sequelize");
const { User, Product } = require("./models/index.js");
const { response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

const createToken = (id) => {
    var maxAge = 3 * 24 * 60 * 60;
    return jwt.sign({ id }, secretKey, {
        expiresIn: maxAge,
    });
};

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//User authentication/login
app.post("/auth", async (req, res) => {
    const { username, password } = req.body;
    console.log("Request", req.body);
    try {
        const user = await User.findOne({
            attributes: ["username", "email", "fullName", "password"],
            where: { username },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const response = {
                ...user.dataValues,
                token: createToken(user.id),
            };
            delete response.password;
            res.json(response);
        }
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

// User Signup
app.post("/user", async (req, res) => {
    const payload = req.body;

    try {
        payload.password = await bcrypt.hash(payload.password, 10);
        console.log(payload.password);
        const result = await User.create(payload);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

// User Get
app.get("/users", async (req, res) => {
    // const payload = req.body;
    try {
        const result = await User.findAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

// Create Product
app.post("/product", async (req, res) => {
    const payload = req.body;
    console.log(payload);
    try {
        const result = await Product.create(payload);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

// Get Product
app.get("/product", async (req, res) => {
    // const payload = req.body;
    try {
        const result = await Product.findAll();
        console.log(result);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
