import { Router } from 'express';
import AuthRouter from './auth';
import CategoriesRouter from './categories';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/auth', AuthRouter);
router.use('/categories', CategoriesRouter);
export default router;
