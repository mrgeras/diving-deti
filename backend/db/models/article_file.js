'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_File extends Model {
    static associate({ File, Article }) {
      this.belongsTo(File, { foreignKey: 'file_id' });
      this.belongsTo(Article, { foreignKey: 'article_id' });
    }
  }
  Article_File.init(
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
          model: 'Articles',
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
      modelName: 'Article_Files',
    }
  );
  return Article_File;
};
