require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

module.exports = app;
