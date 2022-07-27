import mongoose from 'mongoose';
import Joi from 'joi';

const Schema = mongoose.Schema;

export const ProductJoiSchema = Joi.object({
  nombre: Joi.string().required(),
  precio: Joi.number().required(),
  stock: Joi.number().required(),
});

const ProductoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { versionKey: false }
);

export const ProductModel = mongoose.model('products', ProductoSchema);
