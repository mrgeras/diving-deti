'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {

    }
  }
  Admin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    login: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};