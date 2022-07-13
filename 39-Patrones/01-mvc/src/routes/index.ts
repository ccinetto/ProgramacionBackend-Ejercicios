import { Router } from 'express';
import mealRouter from './meals';

const mainRouter = Router();

mainRouter.use('/meals', mealRouter);

export default mainRouter;
