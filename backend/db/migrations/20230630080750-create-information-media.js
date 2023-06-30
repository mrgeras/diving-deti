'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Information_Media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      information_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Informations',
          key: 'id',
        },
      },
      media_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Medias',
          key: 'id',
        },
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
    await queryInterface.dropTable('Information_Media');
  }
};