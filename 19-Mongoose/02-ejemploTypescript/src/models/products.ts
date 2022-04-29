import mongoose from 'mongoose';
import { categoryCollectionName } from './categories';

export const productsCollectionName = 'product';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: mongoose.Types.ObjectId;
}

const productsSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: categoryCollectionName,
    required: true,
  },
});

export const ProductsModel = mongoose.model<IProduct>(
  productsCollectionName,
  productsSchema
);
