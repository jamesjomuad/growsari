const { Product, Order, OrderProducts } = require("../models");
const auth = require("../middlewares/auth");

async function add(req, res) {
    const userId = await auth.userId(req, res);
    const payload = req.body;

    // Order.OrderProducts = Order.hasMany(OrderProducts);
    // OrderProducts.Order = OrderProducts.belongsTo(Order);

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
        res.json(result);
        console.log("result: ", result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { add };
