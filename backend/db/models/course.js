'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({ File, Request }) {
      this.hasMany(File, { foreignKey: 'courseId' });
      this.hasMany(Request, { foreignKey: 'courseId' });
    }
  }
  Course.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      courseImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      courseName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      descriptionFull: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Course',
    }
  );
  return Course;
};
