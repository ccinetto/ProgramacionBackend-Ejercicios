import Joi from 'joi';

export const ProductJoiSchema = Joi.object({
  nombre: Joi.string().required(),
  precio: Joi.number().required(),
  stock: Joi.number().required(),
});
