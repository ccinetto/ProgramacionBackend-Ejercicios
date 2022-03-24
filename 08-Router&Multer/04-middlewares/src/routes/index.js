const express = require('express');
const routerMascotas = require('./mascotas');
const routerPersonas = require('./personas');

const router = express.Router();

/** Funcion3 solo se va a ejecutar cuando se llama a alguna ruta de mascotas */
const funcion3 = (req, res, next) => {
  console.log('Entrando a funcion3');
  next();
};

/** Funcion4 solo se va a ejecutar cuando se llama a alguna ruta de personas */
const funcion4 = (req, res, next) => {
  console.log('Entrando a funcion4');
  next();
};

router.use('/mascotas', funcion3, routerMascotas);
router.use('/personas', funcion4, routerPersonas);

module.exports = router;
