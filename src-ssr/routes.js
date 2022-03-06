"use strict";

const auth = require("./middlewares/auth");

const { User, Product, Order } = require("./controllers");

module.exports = (app, db) => {
    app.get("/api/", (req, res) => {
        res.send("Hello World!");
    });

    app.post("/api/auth", User.signin);

    app.post("/api/user", User.signup);

    app.get("/api/users", auth.verified, User.get);

    app.get("/api/user", auth.verified, User.only);

    app.post("/api/product", auth.verified, Product.post);

    app.get("/api/products", auth.verified, Product.get);

    app.post("/api/order", auth.verified, Order.add);

    app.get("/api/orders", auth.verified, Order.get);
};
