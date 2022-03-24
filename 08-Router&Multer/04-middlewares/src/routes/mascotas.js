const express = require('express');
const { v4: uuidv4 } = require('uuid');

/**
 * DATOS A MANIPULAR
 */
let mascotas = [];

const router = express.Router();

/** Funcion5 solo se va a ejecutar cuando llamemos a la ruta GET /api/mascotas/ */
const funcion5 = (req, res, next) => {
  console.log('Entrando a funcion5');
  next();
};


router.get('/', funcion5, (req, res) => {
  res.json({
    mascotas,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  // throw new Error('Error a proposito')       //descomentar para probar como funciona el middleware de error
  const nuevaMascota = {
    id: uuidv4(),
    nombre: body.nombre,
    raza: body.raza,
    edad: body.edad,
  };

  mascotas.push(nuevaMascota);
  res.json({
    nuevaMascota,
  });
});

module.exports = router