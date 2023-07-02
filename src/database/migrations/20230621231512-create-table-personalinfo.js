'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('personalinfo', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            description: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('personalinfo');
    }
};
