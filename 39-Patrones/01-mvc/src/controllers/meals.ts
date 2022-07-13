import { MealAPI } from '../api/index';

import { Request, Response, NextFunction } from 'express';
import { MealI } from '../model/meals';

class Meal {
  async getMenuHTML(req: Request, res: Response) {
    const meals = await MealAPI.getMeal();
    res.render('menu', { meals: meals });
  }

  async getMenuJSON(req: Request, res: Response) {
    const meals = await MealAPI.getMeal();
    res.send({
      data: meals,
    });
  }

  async createMeal(req: Request, res: Response) {
    const { name, type, price } = req.body;

    if (!name || !type || !price)
      return res.status(400).json({ msg: 'Invalid Body Fields' });

    const newMeal = await MealAPI.createMeal({ name, type, price });

    res.json({
      data: newMeal,
    });
  }
}

export default new Meal();
