'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    static associate({ File }) {
      this.hasMany(File, { foreignKey: 'coachId' });
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
      coachImg: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      coachName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coachDescription: {
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
