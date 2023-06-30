require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

config(app);

app.listen(PORT, () => {
  console.log(`Этот сервер летит со скоростью ${PORT} км/ч`);
});
