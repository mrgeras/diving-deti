const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const ssr = require('../middleware/ssr');
const getUser = require('../middleware/getUser');
const sessionConfig = require('./sessionConfig');
const fileUpload = require("express-fileupload");


const config = (app) => {
  app.use(fileUpload());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(ssr);
  app.use(getUser);
};

module.exports = config;
