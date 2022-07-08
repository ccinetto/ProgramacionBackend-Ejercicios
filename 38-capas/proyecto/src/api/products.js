import { ProductModel } from '../models';

const find = (id) => {
  if (id) return ProductModel.findById(id);

  return ProductModel.find();
};

const findByCategory = (categoryId) => ProductModel.find({ categoryId });

const create = (newProduct) => ProductModel.create(newProduct);

const update = (id, data) =>
  ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => ProductModel.findByIdAndDelete(id);

export default {
  find,
  create,
  update,
  remove,
  findByCategory,
};
