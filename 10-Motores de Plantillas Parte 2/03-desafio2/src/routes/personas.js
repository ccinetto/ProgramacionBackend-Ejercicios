const express = require('express');
const personasController = require('../controller/personas');

const router = express.Router();

router.post('/', (req, res) => {
  const body = req.body;

  const nuevaPersona = {
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  };

  personasController.save(nuevaPersona);

  res.redirect('/')
});

module.exports = router
