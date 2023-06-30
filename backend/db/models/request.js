'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate({ Course }) {
      this.belongsTo(Course, { foreignKey: 'course_id' });
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
      course_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      request_status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      user_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tel: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
