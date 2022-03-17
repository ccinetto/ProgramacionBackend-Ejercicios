const express = require('express');
const path = require('path')


const app = express();

const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

let visitas = 0;

// EJERCICIO1: ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/', (request, response) => {
  visitas++;
  const myfilePath = path.resolve(__dirname, './views/vista1.html');
  response.sendFile(myfilePath);
});

//EJERCICIO2
app.get('/visitas', (request, response) => {
  visitas++;
  response.json({
    msg: `Esta es la visita numero ${visitas}`,
  });
});

//EJERCICIO3
app.get('/fyh', (request, response) => {
  visitas++;
  response.json({
    fyh: new Date(),
  });
});
