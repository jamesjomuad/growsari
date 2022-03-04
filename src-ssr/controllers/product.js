const { Product } = require("../models");

async function post(req, res) {
    const payload = req.body;
    try {
        const result = await Product.create(payload);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

async function get(req, res) {
    // const payload = req.body;
    try {
        const result = await Product.findAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { get, post };
