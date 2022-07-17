import { Router } from 'express';
import ProductRouter from './products';

const router = Router();

router.use('/products', ProductRouter);

export default router;
