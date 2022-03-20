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
    frase,
  });
});

app.get('/api/palabras/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    palabra: palabras[posicion - 1],
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/palabras', (req, res) => {
  const { nuevaPalabra } = req.body;    //Es lo mismo que hacer const nuevaPalabra = req.body.nuevaPalabra

  if (!nuevaPalabra)
    return res.status(400).json({
      msg: 'Mandame una palabra',
    });

  frase += ' ' + nuevaPalabra;
  res.json({
    agregada: nuevaPalabra,
    pos: frase.split(' ').length,
    frase,
  });
});

app.put('/api/palabras/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);
  const {palabra} = req.body;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  const palabraReemplazada = palabras[posicion - 1];
  palabras[posicion - 1] = palabra;

  frase = palabras.join(' ');

  res.json({
    actualizada: palabra,
    anterior: palabraReemplazada,
    frase,
  });
});

app.delete('/api/palabras/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos) - 1;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  palabras.splice(posicion, 1);

  frase = palabras.join(' ');
  res.json({
    frase,
  });
});
