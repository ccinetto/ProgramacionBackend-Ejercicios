import express from 'express';
import { fork } from 'child_process';
import path from 'path';

const scriptPath = path.resolve(__dirname, './utils/calculo.js');

const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensage: 'Servidor No Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  const computo = fork(scriptPath);
  computo.send('start');
  computo.on('message', (sum) => {
    res.json({
      resultado: sum,
    });
  });
});

const puerto = 8081;

const server = app.listen(puerto, () => {
  console.log(`Servidor No Bloqueante escuchando en el puerto ${puerto}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));
