'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ File }) {
      this.hasMany(File, { foreignKey: 'messageId' });
    }
  }
  Message.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      messageImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      messageName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      messageText: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
