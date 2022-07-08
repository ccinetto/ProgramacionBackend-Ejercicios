import { ProductModel } from '../models';

export const getAllProducts = () => ProductModel.find().populate('userId');

export const getProductById = (id) => ProductModel.findById(id);
