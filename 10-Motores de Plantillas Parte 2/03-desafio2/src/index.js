const express = require('express');
const path = require('path');
const mainRouter = require('./routes/index');
const personasController = require('./controller/personas');

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../vistas');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  const personas = personasController.getAll();
  res.render('index', { personas });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);
