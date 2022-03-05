"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
        }
    }

    Order.init(
        {
            customerID: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );

    return Order;
};
