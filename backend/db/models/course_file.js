'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_File extends Model {
    static associate({ File, Course }) {
      this.belongsTo(File, { foreignKey: 'file_id' });
      this.belongsTo(Course, { foreignKey: 'course_id' });
    }
  }
  Course_File.init(
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
      file_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Files',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Course_File',
    }
  );
  return Course_File;
};
