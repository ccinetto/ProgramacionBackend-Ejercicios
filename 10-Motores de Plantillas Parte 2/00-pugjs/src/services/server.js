const express = require('express');
const path = require('path');

/** INICIALIZACION API con EXPRESS */
const app = express();

app.use(express.static('public'));

const viewsFolderPath = path.resolve(__dirname, '../../views');
app.set('views', viewsFolderPath);
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
	const objetoConDataDinamica = {
		mensaje: 'BIENVENIDOS HUMANOS',
	}
  res.render('hello', objetoConDataDinamica); // Se muestra la plantilla hello.pug
});

app.get('/eje2', (req, res) => {
  const datos = {
    titulo: 'Pepito',
  };
  res.render('ejemplo2', datos); // Se muestra la plantilla ejemplo2.pug
});

const datosGenericos = {
  miarraydeInfo: [
    'mate',
    'cafe',
    'harina',
    'palmitos',
    'yerba',
    'mermelada',
    'cacao',
    'picadillo',
  ],
  mostrarLista2: true,
  listaObjetos: [
    {
      name: 'yerba',
      style: 'toplaner',
    },
    {
      name: 'mermelada',
      style: 'midlaner',
    },
    {
      name: 'cacao',
      style: 'toplaner',
    },
    {
      name: 'picadillo',
      style: 'midlaner',
    },
  ],
};

app.get('/eje3', (req, res) => {
  res.render('ejemplo3', datosGenericos); // Se muestra la plantilla hello.pug
});

app.get('/eje4', (req, res) => {
  res.render('ejemplo4', datosGenericos); // Se muestra la plantilla hello.pug
});

module.exports = app;