const { Product, Order, OrderProducts } = require("../models");
const auth = require("../middlewares/auth");

async function add(req, res) {
    const userId = await auth.userId(req, res);
    const payload = req.body;

    Order.OrderProducts = Order.hasMany(OrderProducts);
    OrderProducts.Order = OrderProducts.belongsTo(Order);
    OrderProducts.Products = OrderProducts.hasMany(Product);

    try {
        const result = await Order.create(
            {
                customerID: 25,
                OrderProducts: [
                    { name: "4 Lorem", price: 55.6 },
                    { name: "5 Lorem", price: 55.6 },
                    { name: "6 Lorem", price: 55.6 },
                ],
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
