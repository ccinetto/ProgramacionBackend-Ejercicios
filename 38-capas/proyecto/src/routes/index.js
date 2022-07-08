import { Router } from 'express';
import AuthRouter from './auth';
import CategoriesRouter from './categories';
import ProductsRouter from './products';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/auth', AuthRouter);
router.use('/categories', CategoriesRouter);
router.use('/products', ProductsRouter);

export default router;
