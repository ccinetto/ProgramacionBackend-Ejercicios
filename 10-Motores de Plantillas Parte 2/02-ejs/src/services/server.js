const express = require('express');
const path = require('path');

/** INICIALIZACION API con EXPRESS */
const app = express();

app.use(express.static('public'));

const viewsFolderPath = path.resolve(__dirname, '../../vistas');
app.set('view engine', 'ejs');
app.set('views', viewsFolderPath);

app.get('/', (req, res) => {
  res.render('hola');
});

app.get('/eje2', (req, res) => {
  const data = {
    titulo: 'HOLA CODER!!!!',
    mensaje: 'Mi Mensaje dinamico con estilo copados',
  };
  res.render('ejemplo2', data);
});

app.get('/eje3', (req, res) => {
  const data = {
    titulo: 'titulo dinamico',
    mensaje: 'Mi Mensaje dinamico con estilo',
    listaSuper: ['mate', 'cafe', 'harina', 'palmitos'],
    mostrarLista: false,
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

module.exports = app;