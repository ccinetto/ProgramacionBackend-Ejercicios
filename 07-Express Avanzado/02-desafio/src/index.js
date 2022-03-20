const express = require('express');

/**
 * DATOS A MANIPULAR
 */
let frase = 'Hola mundo como estan';

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

app.get('/api/frase', (req, res) => {
  res.json({
    data: frase,
  });
});

app.get('/api/letra/:num', (req, res) => {
  const numeroLetra = parseInt(req.params.num);
  console.log(numeroLetra)

  if(isNaN(numeroLetra)){
    return res.status(400).json({
      error: 'El parámetro debe ser numerico',
    });
  }

  if ( numeroLetra < 0 || numeroLetra >= frase.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    data: frase[numeroLetra],
  });
});

app.get('/api/palabra/:num', (req, res) => {
  const numeroPalabra = parseInt(req.params.num);
  const palabras = frase.split(' ');
  console.log(palabras)
  if(isNaN(numeroPalabra)){
    return res.status(400).json({
      error: 'El parámetro debe ser numerico',
    });
  }

  if (numeroPalabra < 0 || numeroPalabra >= palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    data: palabras[numeroPalabra],
  });
});
