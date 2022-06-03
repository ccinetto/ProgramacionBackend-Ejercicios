import express from 'express';
import { calculo } from './utils/calculo';
const app = express();

let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensage: 'Servidor Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  const resultado = calculo();
  res.json({
    resultado,
  });
});

const puerto = 8080;

const server = app.listen(puerto, () => {
  console.log(`Servidor Bloqueante escuchando en el puerto ${puerto}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));
