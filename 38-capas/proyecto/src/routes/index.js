import { Router } from 'express';
import AuthRouter from './auth';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/auth', AuthRouter);
export default router;
