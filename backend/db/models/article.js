'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate({ File }) {
      this.hasMany(File, { foreignKey: 'articleId' });
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
      articleImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      articleName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      articleText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      articleText2: {
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
