import { DBService } from '../services/db';

const tableName = 'productos';

export const checkBodyProduct = async (req, res, next) => {
  const { nombre, descripcion, stock, precio, category_id } = req.body;

  if (!nombre || !descripcion || !stock || !precio || !category_id)
    return res.status(400).json({
      msg: 'missing Body fields',
    });

  next();
};

export const getAllProducts = async (req, res) => {
  try {
    const items = await DBService.get(tableName);

    res.json({
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, stock, precio, category_id } = req.body;

    const data = {
      nombre,
      descripcion,
      stock,
      precio,
      category_id,
    };

    const newId = await DBService.create(tableName, data);

    const newProduct = await DBService.get(tableName, newId);

    res.json({
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, stock, precio, category_id } = req.body;

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    const data = {
      nombre,
      descripcion,
      stock,
      precio,
      category_id,
    };

    DBService.update(tableName, id, data);

    item = await DBService.get(tableName, id);
    res.json({
      msg: 'Product updated',
      item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    DBService.delete(tableName, id);
    res.json({
      msg: 'product deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
