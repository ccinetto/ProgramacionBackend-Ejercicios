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

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

app.get('/hello', (req, res) => {
  res.render('hello', { mensaje: 'HOLA MUNDO' }); // Se muestra la plantilla hello.pug
});

app.get('/eje2', (req, res) => {
  const datos = {
    titulo: 'Ejemplo Numero 2',
  };
  res.render('ejemplo2', datos); // Se muestra la plantilla hello.pug
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
  mostrarLista2: false,
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
