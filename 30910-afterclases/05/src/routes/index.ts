import { Router, Request, Response } from "express";
import CartsRouter from './carts';
import ProductsRouter from './products';

const router = Router();

router.use('/carts', CartsRouter);
router.use('/products', ProductsRouter);

export default router;