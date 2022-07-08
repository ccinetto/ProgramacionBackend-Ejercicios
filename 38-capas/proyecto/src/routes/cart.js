import Handler from 'express-async-handler';
import { Router } from 'express';
import { CartController } from '../controllers';

const router = new Router();

router.get('/', Handler(CartController.getCart));
router.post('/add', Handler(CartController.addProduct));
router.post('/remove', Handler(CartController.deleteProduct));
router.post('/order', Handler(CartController.createOrder));

export default router;
