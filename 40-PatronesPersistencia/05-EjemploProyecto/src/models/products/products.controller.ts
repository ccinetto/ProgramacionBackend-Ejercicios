import ProductsAPI from './products.api';
import { NextFunction, Request, Response } from 'express';
import { ApiError, ErrorStatus } from '../../services/error';

let productosDao: ProductsAPI;

ProductsAPI.getInstance().then((instance) => {
  productosDao = instance;
});

const exists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const result = await productosDao.getProduct(id);
  if (!result) {
    throw new ApiError('Objeto no encontrado', ErrorStatus.NotFound);
  }

  next();
};

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const result = productosDao.validateSchema(req.body);

  if (result.errors) {
    throw new ApiError(
      `Body invalido. ${result.errors.map((a) => a.message)}`,
      ErrorStatus.BadRequest
    );
  } else next();
};

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
  }
  res.json({
    data: await productosDao.getProduct(id),
  });
};

const getProducts = async (req: Request, res: Response) => {
  res.json({
    data: await productosDao.getProduct(),
  });
};

const addProducts = async (req: Request, res: Response) => {
  const newItem = await productosDao.addProduct(req.body);

  res.json({
    msg: 'producto agregado con exito',
    data: newItem,
  });
};

const updateProducts = async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedItem = await productosDao.updateProduct(id, req.body);

  res.json({
    msg: 'actualizando producto',
    data: updatedItem,
  });
};

const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  await productosDao.deleteProduct(id);
  res.json({
    msg: 'producto borrado',
  });
};

export const ProductController = {
  exists,
  validate,
  getProductById,
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
};
