"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            // this.OrderProducts = this.hasMany(models.OrderProducts);
            // this.User = this.belongsTo(models.User);
        }
    }

    Order.init(
        {
            customerID: DataTypes.INTEGER,
            customerID: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );

    return Order;
};
