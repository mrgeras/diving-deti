'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate({
      Coach_Media,
      Article_Media,
      Information_Media,
      Course_Media,
    }) {
      this.hasMany(Coach_Media, { foreignKey: 'media_id' });
      this.hasMany(Article_Media, { foreignKey: 'media_id' });
      this.hasMany(Information_Media, { foreignKey: 'media_id' });
      this.hasMany(Course_Media, { foreignKey: 'media_id' });
    }
  }
  Media.init(
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
      modelName: 'Media',
    }
  );
  return Media;
};
