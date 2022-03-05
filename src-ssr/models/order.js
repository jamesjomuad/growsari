"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            // models.Order.hasMany(models.OrderProducts, {
            //     foreignKey: "orderID",
            // });
            models.Order.belongsTo(models.User);
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
