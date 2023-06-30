'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate({
      Coach_File,
      Article_File,
      Information_File,
      Course_File,
    }) {
      this.hasMany(Coach_File, { foreignKey: 'file_id' });
      this.hasMany(Article_File, { foreignKey: 'file_id' });
      this.hasMany(Information_File, { foreignKey: 'file_id' });
      this.hasMany(Course_File, { foreignKey: 'file_id' });
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
      image: {
        type: DataTypes.TEXT,
      },
      video: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
