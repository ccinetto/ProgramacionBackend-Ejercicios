import ProductosDaoDB from './products.dao';
import { NextFunction, Request, Response } from 'express';
import { ProductJoiSchema } from './products.schema';
import { ValidationResult } from 'joi';

let productosDao : ProductosDaoDB;

ProductosDaoDB.getInstance().then(instance => {
  productosDao = instance;
});

const exists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const result = await productosDao.get(id);
  if (!result.length) {
    res.status(404).json({
      data: 'objeto no encontrado',
    });
  } else next();
}

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const result: ValidationResult = ProductJoiSchema.validate(req.body);

  if (result.error) {
    res.status(400).json({
      msg: 'Invalid Body Parameter',
      error: result.error.details.map((a) => a.message),
    });
  } else next();
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
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
