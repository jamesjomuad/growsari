"use strict";

const auth = require("./middlewares/auth");

const controller = require("./controllers");

module.exports = (app, db) => {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.post("/auth", controller.User.signin);

    app.post("/user", controller.User.signup);

    app.get("/users", auth.verified, controller.User.get);

    app.post("/product", auth.verified, controller.Product.post);

    app.get("/product", auth.verified, controller.Product.get);

    app.post("/order", auth.verified, controller.Order.add);
};
