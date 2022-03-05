"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
            // Collection.belongsToMany(models.product, { through: models.collectionProduct, as: 'products', foreignKey: 'collectionId' })
            // this.OrderProducts = this.hasMany(models.OrderProducts);
            // this.User = this.belongsTo(models.User);
            this.hasMany(models.OrderProducts);
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
