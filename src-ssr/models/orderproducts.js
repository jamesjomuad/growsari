"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OrderProducts extends Model {
        static associate(models) {
            // define association here
            // this.Order = this.belongsTo(models.Order);
            // this.Products = this.hasMany(models.Product);
        }
    }
    OrderProducts.init(
        {
            orderID: DataTypes.INTEGER,
            productID: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            discount: DataTypes.DECIMAL,
            unitPrice: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "OrderProducts",
        }
    );
    return OrderProducts;
};
