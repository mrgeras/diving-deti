'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information_File extends Model {
    static associate({ File, Information }) {
      this.belongsTo(File, { foreignKey: 'file_id' });
      this.belongsTo(Information, { foreignKey: 'information_id' });
    }
  }
  Information_File.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      information_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Informations',
          key: 'id',
        },
      },
      file_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Files',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Information_File',
    }
  );
  return Information_File;
};
