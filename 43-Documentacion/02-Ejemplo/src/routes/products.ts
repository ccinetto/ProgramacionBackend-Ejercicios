import { Router } from 'express';
import { ProductController } from '../models/products/products.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  asyncHandler(ProductController.getProducts)
);

router.get(
  '/:id',
  asyncHandler(ProductController.exists),
  asyncHandler(ProductController.getProductById)
);

router.post(
  '/',
  ProductController.validate,
  asyncHandler(ProductController.addProducts)
);

router.put(
  '/:id',
  ProductController.exists,
  ProductController.validate,
  asyncHandler(ProductController.updateProducts)
);

router.delete(
  '/:id',
  ProductController.exists,
  asyncHandler(ProductController.deleteProducts)
);

export default router;
