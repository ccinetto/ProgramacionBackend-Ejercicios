import ProductosDaoDB from './products.dao';
import { NextFunction, Request, Response } from 'express';
import { ProductJoiSchema } from './products.schema';
import { ValidationResult } from 'joi';
import { ApiError, ErrorStatus } from '../../services/error';

let productosDao : ProductosDaoDB;

ProductosDaoDB.getInstance().then(instance => {
  productosDao = instance;
});

const exists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const validId = await productosDao.isValid(id);

  if(!validId) {
    throw new ApiError('Id no valido', ErrorStatus.BadRequest)
  }

  const result = await productosDao.get(id);
  if (!result) {
    throw new ApiError('Objeto no encontrado', ErrorStatus.NotFound)
  }

  next();
}

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const result: ValidationResult = ProductJoiSchema.validate(req.body);

  if (result.error) {
    throw new ApiError(`Body invalido. ${result.error.details.map((a) => a.message)}`, ErrorStatus.BadRequest)
  } else next();
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if(id){

  }
  res.json({
    data: await productosDao.get(id),
  });
}

const getProducts = async (req: Request, res: Response) => {
  res.json({
    data: await productosDao.get(),
  });
}

const addProducts = async(req: Request, res: Response) => {
  const newItem = await productosDao.add(req.body);

  res.json({
    msg: 'producto agregado con exito',
    data: newItem,
  });
}

const updateProducts = async(req: Request, res: Response) => {
  const id = req.params.id;

  const updatedItem = await productosDao.update(id, req.body);

  res.json({
    msg: 'actualizando producto',
    data: updatedItem,
  });
}

const deleteProducts = async(req: Request, res: Response) => {
  const { id } = req.params;
  await productosDao.delete(id);
  res.json({
    msg: 'producto borrado',
  });
}


export const ProductController = {
  exists,
  validate,
  getProductById,
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts
}
