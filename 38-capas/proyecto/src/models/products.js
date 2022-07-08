import mongoose from 'mongoose';
import { categoryCollectionName } from './categories';

export const productsCollectionName = 'product';

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: categoryCollectionName,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const ProductModel = mongoose.model(
  productsCollectionName,
  productsSchema,
);
