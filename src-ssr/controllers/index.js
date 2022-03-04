const User = require("./User.js");
const Product = require("./product.js");
const Order = require("./order.js");

async function index(req, res) {
    // console.log(await auth.userId(req, res));
    res.send("Hello World!");
}

module.exports = { index, User, Product, Order };
