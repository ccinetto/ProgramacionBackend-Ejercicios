var express = require('express');
var router = express.Router();
var debug = require('debug')('myapp:productos');

const productos = [];

router.use(express.urlencoded({ extended: true }));

/* GET productos listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource GET all');
  debug('Listening on ' + JSON.stringify(productos));
  res.json({ productos });
});

/* GET ID productos listing. */
router.get('/:index', function (req, res, next) {
  //res.send('respond with a resource GET index');
  let index = parseInt(req.params.index);
  res.json({ producto: productos[index] });
});

/* POST productos listing. */
router.post('/', function (req, res, next) {
  //res.send('respond with a resource POST');

  let { nombre, precio } = req.body;
  let producto = { nombre, precio: Number(precio) };

  productos.push(producto);
  res.redirect('/');
});

/* PUT productos listing. */
router.put('/:index', function (req, res, next) {
  //res.send('respond with a resource PUT');

  let index = parseInt(req.params.index);
  let { nombre, precio } = req.body;
  let producto = { nombre, precio: Number(precio) };

  productos.splice(index, 1, producto);
  res.json({ producto });
});

/* DELETE productos listing. */
router.delete('/:index', function (req, res, next) {
  //res.send('respond with a resource DELETE');

  let index = parseInt(req.params.index);
  let producto = productos.splice(index, 1);
  res.json({ producto });
});

module.exports = router;
