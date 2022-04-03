const express = require('express');
const path = require('path');

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
  res.render('hola');
});

app.get('/eje2', (req, res) => {
  const data = {
    titulo: 'titulo dinamico',
    mensaje: 'Mi Mensaje dinamico con estilo',
  };
  res.render('ejemplo2', data);
});

app.get('/eje3', (req, res) => {
  const data = {
    titulo: 'titulo dinamico',
    mensaje: 'Mi Mensaje dinamico con estilo',
    listaSuper: ['mate', 'cafe', 'harina', 'palmitos'],
    mostrarLista: true,
    numero : 11
  }
  res.render('ejemplo3', data);
});

app.get('/eje4', (req, res) => {
  const data = {
    titulo: 'titulo dinamico',
    mensaje: 'Mi Mensaje dinamico con estilo',
    listaSuper: ['mate', 'cafe', 'harina', 'palmitos'],
    mostrarLista: false,
    listaTodos: [
      {
        nombre: 'hacer cafe',
        style: 'toplaner',
      },
      {
        nombre: 'beber cafe',
        style: 'midlaner',
      },
      {
        nombre: 'hacer hamburguesas',
        style: 'toplaner',
      },
    ],
  };
  res.render('ejemplo4', data);
});
