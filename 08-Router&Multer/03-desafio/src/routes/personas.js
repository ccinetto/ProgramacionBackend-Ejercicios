const express = require('express');
const { v4: uuidv4 } = require('uuid');

/**
 * DATOS A MANIPULAR
 */
let personas = [];

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    personas,
  });
});

router.post('/', (req, res) => {
  const body = req.body;

  const nuevaPersona = {
    id: uuidv4(),
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  };

  personas.push(nuevaPersona);
  res.json({
    nuevaPersona,
  });
});

module.exports = router