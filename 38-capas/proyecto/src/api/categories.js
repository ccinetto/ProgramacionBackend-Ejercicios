import { CategoryModel } from '../models';

const find = (id) => {
  if (id) return CategoryModel.findById(id);

  return CategoryModel.find();
};

const create = (newCategory) => CategoryModel.create(newCategory);

const update = (id, data) =>
  CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => CategoryModel.findByIdAndDelete(id);

export default {
  find,
  create,
  update,
  remove,
};
