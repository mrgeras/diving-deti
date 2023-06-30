'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coach_Media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coach_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Coaches',
          key: 'id'
        }
      },
      media_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Medias',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Coach_Media');
  }
};