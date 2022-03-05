const { Product, Order, OrderProducts } = require("../models");
const auth = require("../middlewares/auth");

async function add(req, res) {
    const userId = await auth.userId(req, res);
    const payload = req.body;

    console.log(payload);

    try {
        const result = await Order.create(
            {
                customerID: 25,
                OrderProducts: {
                    Products: [1, 2, 3, 4, 5, 6],
                },
            },
            {
                include: [
                    {
                        association: Order.OrderProducts,
                        include: [OrderProducts.Products],
                    },
                ],
            }
        );
        console.log("result: ", result);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { add };
