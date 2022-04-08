const express = require('express');
const { ProductosController } = require('../controller/productos');

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await ProductosController.getAll();
  res.json({
    data: productos,
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; //const id = req.params.id

  const producto = await ProductosController.getById(id);

  if (!producto)
    return res.status(404).json({
      msg: 'Product not found',
    });

  res.json({
    data: producto,
  });
});

router.post('/', async (req, res) => {
  const { precio, nombre } = req.body;

  if (!nombre || !precio)
    return res.status(400).json({
      msg: 'Falta Nombre o Precio en el Body',
    });

  const nuevoProducto = {
    precio,
    nombre,
  };
  
  await ProductosController.save(nuevoProducto);

  res.json({
    msg: 'POST PRODUCTOS',
  });
});

router.put('/:id', async (req, res) => {
  const { precio, nombre } = req.body;
  const { id } = req.params; //const id = req.params.id

  const producto = await ProductosController.getById(id);

  if (!producto)
    return res.status(404).json({
      msg: 'Product not found',
    });


  if (!nombre || !precio)
    return res.status(400).json({
      msg: 'Falta Nombre o Precio en el Body',
    });

  const nuevoProducto = {
    precio,
    nombre,
  };
  
  const result = await ProductosController.Update(id, nuevoProducto)

  res.json({
    data: result,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params; //const id = req.params.id

  await ProductosController.deleteById(id)
  res.json({
    msg: 'Ok',
  });
});

module.exports = router;
