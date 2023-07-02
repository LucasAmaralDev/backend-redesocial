'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            username: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            password: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            imgprofile: {
                type: Sequelize.TEXT,
                allowNull: true,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
