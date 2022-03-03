const express = require("express");
const app = express();
const port = 3000;

const models = require("models");

app.get("/", (req, res) => {
    console.log(models);
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
