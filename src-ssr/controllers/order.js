const { User, Order, OrderProducts } = require("../models");
const auth = require("../middlewares/auth");

async function add(req, res) {
    const userId = await auth.userId(req, res);
    const payload = req.body;

    try {
        const newOrder = await Order.create({
            userID: userId,
            comment: "hi",
        });

        const items = [];

        payload.forEach((val, i) => {
            items.push({
                orderID: newOrder.dataValues.id,
                productID: val.id,
                quantity: 1,
                discount: 0,
                unitPrice: val.price,
            });
        });

        const newOrderItems = await OrderProducts.bulkCreate(items);

        res.json(newOrderItems);
    } catch (error) {
        res.json(error);
    }
}

async function get(req, res) {
    const userId = await auth.userId(req, res);
    // const payload = req.body;
    try {
        const { Orders } = await User.findByPk(userId, {
            include: [
                {
                    model: Order,
                    include: { model: OrderProducts },
                },
            ],
        });

        res.json(Orders);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { add, get };
