'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Course_Media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
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
    await queryInterface.dropTable('Course_Media');
  }
};