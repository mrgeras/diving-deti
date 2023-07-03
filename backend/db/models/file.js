'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate({ Coach, Article, Information, Course }) {
      this.belongsTo(Coach, { foreignKey: 'coach_id' });
      this.belongsTo(Article, { foreignKey: 'article_id' });
      this.belongsTo(Information, { foreignKey: 'information_id' });
      this.belongsTo(Course, { foreignKey: 'course_id' });
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
      coach_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Coaches',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      article_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Articles',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      information_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Informations',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      course_id: {
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
