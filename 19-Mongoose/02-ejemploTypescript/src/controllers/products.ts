import { NextFunction, Request, Response } from 'express';
import { ProductsModel } from '../models/products';
import { CategoryModel } from '../models/categories';

export const checkBodyProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, description, stock, price, categoryId } = req.body;

  if (!name || !description || !stock || !price || !categoryId)
    return res.status(400).json({
      msg: 'missing Body fields',
    });

  const category = await CategoryModel.findById(categoryId);

  if (!category)
    return res.status(400).json({
      msg: 'Category does not exists',
    });

  next();
};

interface QueryProducts {
  categoryId ?: string;
}
export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { categoryId } = req.query;

    const query : QueryProducts = {};

    if(categoryId && typeof categoryId == 'string')
      query.categoryId = categoryId;

    const items = await ProductsModel.find(query);

    res.json({
      data: items,
    });
  } catch (err) {
    if(err instanceof Error)
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    else next(err);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const { id } = req.params;

    const item = await ProductsModel.findById(id);

    if (!item)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: item,
    });
  } catch (err) {
    if(err instanceof Error)
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    else next(err);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, stock, price, categoryId } = req.body;

    const newProduct = await ProductsModel.create({
      name,
      description,
      stock,
      price,
      categoryId,
    });

    res.json({
      data: newProduct,
    });
  } catch (err) {
    if(err instanceof Error)
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    else next(err);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, description, stock, price, categoryId } = req.body;

    let item = await ProductsModel.findById(id);

    if (!item)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    const productUpdated = await ProductsModel.findByIdAndUpdate(
      id,
      { name, description, stock, price, categoryId },
      { new: true }
    );

    res.json({
      msg: 'Product updated',
      data: productUpdated,
    });
  } catch (err) {
    if(err instanceof Error)
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    else next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await ProductsModel.findByIdAndDelete(id);

    res.json({
      msg: 'product deleted',
    });
  } catch (err) {
    if(err instanceof Error)
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    else next(err);
  }
};
