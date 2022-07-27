import { Router } from 'express';
import productsRouter from './productos';

const router = Router();

router.use('/products', productsRouter);

export default router;
