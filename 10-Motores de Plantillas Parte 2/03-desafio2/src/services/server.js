const express = require('express');
const path = require('path');
const mainRouter = require('../routes/index');
const personasController = require('../controller/personas');

/** INICIALIZACION API con EXPRESS */
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../../vistas');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  const personas = personasController.getAll();
  res.render('index', { personas });
});

app.use(express.json());	//permite json
app.use(express.urlencoded({ extended: true }));  //permite form data

app.use('/api', mainRouter);

module.exports = app;