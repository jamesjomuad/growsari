const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const auth = require("./middlewares/auth");
const { User, Product } = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//User authentication/login
app.post("/auth", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            attributes: ["username", "email", "fullName", "password"],
            where: { username },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const response = {
                ...user.dataValues,
                token: auth.createToken(user.username),
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
app.post("/product", auth.verified, async (req, res) => {
    const payload = req.body;
    try {
        const result = await Product.create(payload);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

// Get Product
app.get("/product", auth.verified, async (req, res) => {
    // const payload = req.body;
    try {
        const result = await Product.findAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
