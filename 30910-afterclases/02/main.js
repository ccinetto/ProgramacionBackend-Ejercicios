const express = require('express');
const { Contenedor } = require('./contenedor');

const app = express();

app.listen(8080, () => console.log('ESTAMOS LISTOS'));

app.get('/productos', async (req, res) => {
  const resultado = await Contenedor.getAll();

  res.json({
    data: resultado,
  });
});

app.get('/productoRandom', async (req, res) => {
  //Consejo
  //Llamar a Contenedor.getAll
  //en un array me quedo con todos los ids
  // genero un numero aleatorio entre 0 y el numero maximo de elementos que tengo
  // con el numero aleatorio busco que id es
  //llamo a Contenedor.getById con el id aleatorio que consegui

  const randomId = 2; //Funcion que genere random ids

  const resultado = await Contenedor.getById(randomId);

  res.json(resultado);
});
