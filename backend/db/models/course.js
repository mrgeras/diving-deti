'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({ Course_Media, Request }) {
      this.hasMany(Course_Media, { foreignKey: 'course_id' });
      this.hasMany(Request, { foreignKey: 'course_id' });
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
      course_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
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
