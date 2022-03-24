const express = require('express');
const path = require('path')
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


/**
 * Disponibilizamos la carpeta public para brindar archivos estaticos
 * Archivos pueden ser html imagenes, css files, etc
 */
const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));

/**Podemos poner mas de un path statico para express */

const secondStaticFolder = path.resolve(__dirname, '../staticFolder');
console.log(secondStaticFolder);
app.use(express.static(secondStaticFolder));

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api', mainRouter);
