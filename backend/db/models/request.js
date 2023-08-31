'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate({ Course }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });
    }
  }
  Request.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      courseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      requestStatus: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      userName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tel: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Request',
    }
  );
  return Request;
};
