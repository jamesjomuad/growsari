"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            models.Order.belongsTo(models.User);
            models.Order.hasMany(models.OrderProducts, {
                foreignKey: "orderID",
            });
        }
    }

    Order.init(
        {
            userID: DataTypes.INTEGER,
            comment: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );

    return Order;
};
