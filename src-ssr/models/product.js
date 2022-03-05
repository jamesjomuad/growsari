"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // define association here
            // models.Product.belongsTo(models.OrderProducts);
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            expiration: DataTypes.DATE,
            price: DataTypes.DECIMAL,
            barcode: DataTypes.STRING,
            tag: DataTypes.STRING,
            category: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
