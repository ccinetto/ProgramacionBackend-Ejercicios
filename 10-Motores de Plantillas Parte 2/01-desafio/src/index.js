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

app.get('/datos', (req, res) => {
  console.log(req.query);

  res.render('datos.pug', req.query); // Se muestra la plantilla hello.pug
});
