'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    static associate({ Coach_File }) {
      this.hasMany(Coach_File, { foreignKey: 'coach_id' });
    }
  }
  Coach.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      coach_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coach_description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Coach',
    }
  );
  return Coach;
};
