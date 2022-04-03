const express = require('express');
const Personas = require('../controller/personas');

const router = express.Router();

router.post('/guardar', (req, res) => {
  const body = req.body;

  const nuevaPersona = {
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  };

  Personas.save(nuevaPersona);

  res.redirect('/');
});

module.exports = router
