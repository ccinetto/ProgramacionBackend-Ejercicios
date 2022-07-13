import { Router } from 'express';
import { MealController } from '../controllers';

export const mealRouter = Router();

mealRouter.get('/menuHTML', MealController.getMenuHTML);
mealRouter.get('/menuJSON', MealController.getMenuJSON);
mealRouter.post('/', MealController.createMeal);
export default mealRouter;
