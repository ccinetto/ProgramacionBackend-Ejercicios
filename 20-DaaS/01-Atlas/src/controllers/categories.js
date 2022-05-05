import { CategoryModel } from '../models/categories';

export const getAllCategories = async (req, res) => {
  try {
    console.log(this);
    const items = await CategoryModel.find();

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

    const item = await CategoryModel.findById(id);

    if (!item)
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
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const newCategory = await CategoryModel.create({
      name,
      description,
    });

    res.json({
      data: newCategory,
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
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const categoryUpdated = await CategoryModel.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    res.json({
      msg: 'Category updated',
      category: categoryUpdated,
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

    await CategoryModel.findByIdAndDelete(id);

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