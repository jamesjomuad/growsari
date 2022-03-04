const User = require("./User.js");
const Product = require("./product.js");

async function index(req, res) {
    // Order.create(
    //     {
    //         customerID: 25,
    //         OrderDetails: [{ id: 1 }, { id: 2 }, { id: 3 }],
    //     },
    //     {
    //         include: [OrderDetails],
    //     }
    // );
    console.log(await auth.userId(req, res));
    res.send("Hello World!");
}

module.exports = { index, User, Product };
