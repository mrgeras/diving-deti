'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate({ Coach, Article, Message, Course }) {
      this.belongsTo(Coach, { foreignKey: 'coachId' });
      this.belongsTo(Article, { foreignKey: 'articleId' });
      this.belongsTo(Message, { foreignKey: 'messageId' });
      this.belongsTo(Course, { foreignKey: 'courseId' });
    }
  }
  File.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      file: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      coachId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Coaches',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      articleId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Articles',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      messageId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Messages',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      courseId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
