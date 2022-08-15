import { Router, OpineRequest, OpineResponse } from '../depts.ts';
import ProductsRouter from './products.ts';

const router = Router();

router.get('/', (req: OpineRequest, res: OpineResponse) => {
	res.json({msg: 'HOLA'});
})

router.use('/products', ProductsRouter);

export default router;