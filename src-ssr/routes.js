"use strict";

const auth = require("./middlewares/auth");

const controller = require("./controllers");

module.exports = (app, db) => {
    app.get("/api/", (req, res) => {
        res.send("Hello World!");
    });

    app.post("/api/auth", controller.User.signin);

    app.post("/api/user", controller.User.signup);

    app.get("/api/users", auth.verified, controller.User.get);

    app.get("/api/user", auth.verified, controller.User.only);

    app.post("/api/product", auth.verified, controller.Product.post);

    app.get("/api/products", auth.verified, controller.Product.get);

    app.post("/api/order", auth.verified, controller.Order.add);

    app.get("/api/orders", auth.verified, controller.Order.get);
};
