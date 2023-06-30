'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Media extends Model {
    static associate({Media, Course}) {
      this.belongsTo(Media, {foreignKey:'media_id'})
      this.belongsTo(Course, {foreignKey:'course_id'})
    }
  }
  Course_Media.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Courses',
        key: 'id',
      },
    },
    media_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Media',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Course_Media',
  });
  return Course_Media;
};