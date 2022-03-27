const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

//Disponibilizamos la carpeta public para archivos estaticos
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//Conseguimos el path absoluto de la carpeta layouts
const layoutDirPath = path.resolve(__dirname, '../views/layouts');

//Conseguimos el path absoluto del esqueleto de nuestro HTML (layouts/index.hbs)
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');

const partialDirPath = path.resolve(__dirname, '../views/partials');


//Le decimos a nuestra app de express que vamos a usar handlebars
app.set('view engine', 'hbs');

//Configuramos el handlebars que indicamos en la linea anterior, para eso le pasamos la funcion engine y dentro la configuracion
app.engine(
  'hbs',
  engine({
    layoutsDir: layoutDirPath, //le decimos donde esta la carpeta de layouts
    extname: 'hbs', //indicamos la extension de los archivos (por defecto es .handlebars y es muy largo)
    defaultLayout: defaultLayerPth, //indicamos cual es el layout por defecto que usara,
    partialsDir: partialDirPath,
  })
);

const dinamicData = {
    nombre: 'Franco',
    apellido: 'Soldano',
    mostrarLista: false,
    listaSuper: ['mate', 'cafe', 'harina', 'palmitos'],
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
  
  app.get('/', (req, res) => {
    res.render('main', dinamicData);
  });
  
