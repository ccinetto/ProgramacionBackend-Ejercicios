import {Router} from 'express';
import CirculoRouter from './circulo';
import CuadradoRouter from './cuadrado';
import RectanguloRouter from './rectangulo';

const router = Router();

router.use('/circulo', CirculoRouter);
router.use('/cuadrado', CuadradoRouter);
router.use('/rectangulo', RectanguloRouter);

export default router;