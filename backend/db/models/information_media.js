'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information_Media extends Model {
    static associate({ Media, Information }) {
      this.belongsTo(Media, { foreignKey: 'media_id' });
      this.belongsTo(Information, { foreignKey: 'information_id' });
    }
  }
  Information_Media.init(
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
          model: 'Information',
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
    },
    {
      sequelize,
      modelName: 'Information_Media',
    }
  );
  return Information_Media;
};
