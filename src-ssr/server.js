const CryptoJS = require("crypto-js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const { User, Product } = require("./models/index.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

const encrypt = (src) => {
    const passphrase = "ErVGY39nT52NzHT"; //Salt
    return CryptoJS.AES.encrypt(src, passphrase).toString();
};

const decrypt = (src) => {
    const passphrase = "ErVGY39nT52NzHT"; //Salt
    const bytes = CryptoJS.AES.decrypt(src, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//User authentication/login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = decrypt(password);

    try {
        const user = await User.findOne({
            where: { username: username, password: password },
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

// User Signup
app.post("/user", async (req, res) => {
    const payload = req.body;
    payload.password = encrypt(payload.password);
    try {
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
