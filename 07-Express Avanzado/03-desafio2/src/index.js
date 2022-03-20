const express = require('express');

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

/**
 * DEFINICION RUTAS BASICAS
 */

app.get('/api/sumar/:num1/:num2', (req, res) => {
  const n1 = parseInt(req.params.num1);
  const n2 = parseInt(req.params.num2);

  res.json({
    resultado: n1 + n2,
  });
});

app.get('/api/sumar', (req, res) => {
  const {num1, num2} = req.query
  const n1 = parseInt(num1) || 0;
  const n2 = parseInt(num2) || 0;

  res.json({
    resultado: n1 + n2,
  });
});

app.get('/api/operacion/:op', (req, res) => {
  res.json({
    resultado: eval(req.params.op),
  });
});

app.post('/api', (req, res) => {
  res.json({
    msg: 'ok + post',
  });
});

app.put('/api', (req, res) => {
  res.json({
    msg: 'ok + put',
  });
});

app.delete('/api', (req, res) => {
  res.json({
    msg: 'ok + delete',
  });
});
