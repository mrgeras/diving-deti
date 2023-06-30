'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Media extends Model {
    static associate({ Media, Article }) {
      this.belongsTo(Media, { foreignKey: 'media_id' });
      this.belongsTo(Article, { foreignKey: 'article_id' });
    }
  }
  Article_Media.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      article_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Article',
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
      modelName: 'Article_Media',
    }
  );
  return Article_Media;
};
