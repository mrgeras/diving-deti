require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 3000;

config(app);

app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
