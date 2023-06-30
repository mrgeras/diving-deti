'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach_File extends Model {
    static associate({ File, Coach }) {
      this.belongsTo(File, { foreignKey: 'file_id' });
      this.belongsTo(Coach, { foreignKey: 'coach_id' });
    }
  }
  File.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      coach_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model: 'Coaches',
          key: 'id'
        }
      },
      file_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model: 'Files',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return Coach_File;
};
