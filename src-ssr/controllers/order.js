const { Order } = require("../models");
const auth = require("../middlewares/auth");

async function add(req, res) {
    const userId = await auth.userId(req, res);
    const payload = req.body;

    try {
        console.log("userId: ", userId);
        console.log("payload: ", payload);

        const result = await Order.create(
            {
                customerID: 25,
                OrderDetails: [{ id: 1 }, { id: 2 }, { id: 3 }],
            },
            {
                include: [OrderDetails],
            }
        );
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { add };
