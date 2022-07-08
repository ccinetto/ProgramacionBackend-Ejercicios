import Handler from 'express-async-handler';
import { Router } from 'express';
import { ProductController } from '../controllers';

const router = new Router();

router.get('/', Handler(ProductController.getAllProducts));
router.get('/:id', Handler(ProductController.getProductById));
router.post('/', Handler(ProductController.createProduct));
router.put('/:id', Handler(ProductController.updateProduct));
router.delete('/:id', Handler(ProductController.deleteProduct));

export default router;
