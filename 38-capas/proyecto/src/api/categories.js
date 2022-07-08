import { CategoryModel } from '../models';
import { ProductsAPI } from './index';
import { ApiError, ErrorStatus } from './error';

const find = (id) => {
  if (id) return CategoryModel.findById(id);

  return CategoryModel.find();
};

const create = (newCategory) => CategoryModel.create(newCategory);

const update = (id, data) =>
  CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = async (id) => {
  const productsWithCategory = await ProductsAPI.findByCategory(id);

  if (productsWithCategory.length > 0)
    throw new ApiError(
      'Cannot delete category because there is products with that category',
      ErrorStatus.BadRequest,
    );

  CategoryModel.findByIdAndDelete(id);
};

export default {
  find,
  create,
  update,
  remove,
};
