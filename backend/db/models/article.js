'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate({ File }) {
      this.hasMany(File, { foreignKey: 'article_id' });
    }
  }
  Article.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      article_img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      article_name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      article_text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Article',
    }
  );
  return Article;
};
