'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({ File, Request }) {
      this.hasMany(File, { foreignKey: 'course_id' });
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
      course_img: {
        allowNull: false,
        type: DataTypes.TEXT
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
