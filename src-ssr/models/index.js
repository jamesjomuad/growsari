"use strict";

const Sequelize = require("sequelize");
const config = {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: "src-ssr/database.sqlite",
};
const db = {};
const models = ["order.js", "orderproducts.js", "product.js", "user.js"];

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

models.forEach((file) => {
    const model = require("./" + file)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Relations
// db.Order.hasMany(db.OrderProducts, {
//     foreignKey: "orderID",
// });
// db.OrderProducts.belongsTo(db.Order);
// db.Order.belongsTo(db.User);
// db.User.hasMany(db.Order);

module.exports = db;
