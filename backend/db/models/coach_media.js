'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach_Media extends Model {
    static associate({ Media, Coach }) {
      this.belongsTo(Media, { foreignKey: 'media_id' });
      this.belongsTo(Coach, { foreignKey: 'coach_id' });
    }
  }
  Coach_Media.init(
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
          model: 'Coach',
          key: 'id'
        }
      },
      media_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model: 'Media',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: 'Coach_Media',
    }
  );
  return Coach_Media;
};
