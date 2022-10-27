// Import Libraries
const express = require('express');
const http = require('http');
const mainRouter = require('../routes');

//Basic Config
const app = express();
const server = http.Server(app);

// define the paths to the static files
app.use(express.static('public'));

app.use('/api', mainRouter);

module.exports = server;



