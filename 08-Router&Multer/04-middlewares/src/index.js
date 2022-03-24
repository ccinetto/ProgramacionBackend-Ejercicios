const express = require('express');
const mainRouter = require('./routes/index');

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const funcion1 = (req, res, next) => {
  console.log('Entrando a funcion1');
  next();
};

const funcion2 = (req, res, next) => {
  console.log('Entrando a funcion2');
  next();
};

/** Ejecutando middlewares 1 y 2 para toda la aplicacion */
app.use(funcion1);
app.use(funcion2);

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api', mainRouter);

/**Este middleware se ejecutara si alguna ruta se rompe. */
app.use(function (err, req, res, next) {
  res.status(500).send({ msg: 'Something broke!', err: err.message });
});
