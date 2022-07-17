import mongoose from 'mongoose';
import Joi from 'joi';
import { ProductI } from './product.interfaces';

const { Schema } = mongoose;

export const ProductJoiSchema = Joi.object({
  nombre: Joi.string().required(),
  precio: Joi.number().required(),
  stock: Joi.number().required(),
});

const ProductoSchema = new Schema<ProductI>(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { versionKey: false }
);

export const ProductModel = mongoose.model<ProductI>('products', ProductoSchema);