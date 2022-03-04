"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        static associate(models) {
            // define association here
            this.Order = this.belongsTo(models.Order);
        }
    }
    OrderDetails.init(
        {
            orderID: DataTypes.INTEGER,
            productID: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            discount: DataTypes.DECIMAL,
            unitPrice: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "OrderDetails",
        }
    );
    return OrderDetails;
};
