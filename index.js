'use strict';
require('dotenv').config();
const { start } = require('./src/server.js');

start(process.env.PORT || 3000);
