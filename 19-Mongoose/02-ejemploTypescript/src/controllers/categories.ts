import { NextFunction, Request, Response } from 'express';
import { CategoryModel } from '../models/categories';

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(this);
    const items = await CategoryModel.find();

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

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const item = await CategoryModel.findById(id);

    if (!item)
      return res.status(404).json({
        msgs: 'Category not found!',
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

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const newCategory = await CategoryModel.create({
      name,
      description,
    });

    res.json({
      data: newCategory,
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

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const categoryUpdated = await CategoryModel.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    res.json({
      msg: 'Category updated',
      category: categoryUpdated,
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

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await CategoryModel.findByIdAndDelete(id);

    res.json({
      msg: 'Category deleted',
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