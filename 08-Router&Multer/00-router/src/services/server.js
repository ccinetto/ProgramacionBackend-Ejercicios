const express = require('express');
const mainRouter = require('../routes/index');

/** INICIALIZACION API con EXPRESS */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', mainRouter);

module.exports = app;