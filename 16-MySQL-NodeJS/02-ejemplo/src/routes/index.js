import { Router } from 'express';
import productsRouter from './products';
import categoriesRouter from './category';

const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);

export default router;
