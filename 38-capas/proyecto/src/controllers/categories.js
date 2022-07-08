import { CategoryAPI } from '../api';

const getAllCategories = async (req, res) => {
  const categories = await CategoryAPI.find();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryAPI.find(id);

  if (!category) return res.status(404).json({ msg: 'Category not found' });

  res.json({
    data: category,
  });
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description)
    return res.status(400).json({ msg: 'Invalid Body parameter' });

  const newCategory = {
    name,
    description,
  };

  const category = await CategoryAPI.create(newCategory);

  res.json({
    msg: 'category created',
    data: category,
  });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name && !description)
    return res.status(400).json({ msg: 'Invalid Body parameter' });

  const newData = {
    name,
    description,
  };

  const categoryUpdated = await CategoryAPI.update(id, newData);

  res.json({
    msg: 'category updated',
    data: categoryUpdated,
  });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const category = await CategoryAPI.find(id);

  if (!category) return res.status(404).json({ msg: 'Category not found' });

  await CategoryAPI.remove(id);

  res.json({
    msg: 'Category deleted',
  });
};

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
