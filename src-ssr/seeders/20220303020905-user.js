"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                fullName: "James Jomuad",
                email: "james.jomuad@outlook.com",
                username: "james",
                password:
                    "$2b$10$EsvA4qoMa2Lp1qSaUAoYWOpJsTTXI/yLu7zTcpjMYPkMvP0y9fRMS",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
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
