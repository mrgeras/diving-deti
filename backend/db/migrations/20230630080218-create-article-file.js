'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Article_Files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      article_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      file_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Files',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Article_Files');
  },
};
