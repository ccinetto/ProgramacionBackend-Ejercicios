import { DBService } from '../services/db';

const tableName = 'categorias';

export const getAllCategories = async (req, res) => {
  try {
    console.log(this);
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

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
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

export const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const data = {
      nombre,
    };

    const id = await DBService.create(tableName, data);

    const newItem = await DBService.get(tableName, id);
    res.json({
      data: newItem,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!nombre)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
      });

    const data = {
      nombre,
    };

    await DBService.update(tableName, id, data);

    item = await DBService.get(tableName, id);
    res.json({
      msg: 'Category updated',
      item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
      });

    await DBService.delete(tableName, id);
    res.json({
      msg: 'Category deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
