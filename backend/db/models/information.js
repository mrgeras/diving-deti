'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    static associate({ File }) {
      this.hasMany(File, { foreignKey: 'information_id' });
    }
  }
  Information.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      information_img: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      information_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      information_text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Information',
    }
  );
  return Information;
};
