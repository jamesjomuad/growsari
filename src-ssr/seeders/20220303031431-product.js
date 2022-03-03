"use strict";

const faker = require("@faker-js/faker").default;

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        const products = [];

        [...Array(300).keys()].forEach((i, x) => {
            products.push({
                name: faker.commerce.product(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        });

        // await queryInterface.bulkInsert("Product", products, {});
        return queryInterface.bulkInsert("Products", products);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
