import { Router } from 'express';
import { ProductController } from '../models/products/products.controller';
import Handler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  Handler(ProductController.getProducts)
);

router.get(
  '/:id',
  Handler(ProductController.exists),
  Handler(ProductController.getProductById)
);

router.post(
  '/',
  ProductController.validate,
  Handler(ProductController.addProducts)
);

router.put(
  '/:id',
  ProductController.exists,
  ProductController.validate,
  Handler(ProductController.updateProducts)
);

router.delete(
  '/:id',
  ProductController.exists,
  Handler(ProductController.deleteProducts)
);

export default router;
