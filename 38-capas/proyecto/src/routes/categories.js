import Handler from 'express-async-handler';
import { Router } from 'express';
import { CategoryController } from '../controllers';

const router = new Router();

router.get('/', Handler(CategoryController.getAllCategories));
router.get('/:id', Handler(CategoryController.getCategoryById));
router.post('/', Handler(CategoryController.createCategory));
router.put('/:id', Handler(CategoryController.updateCategory));
router.delete('/:id', Handler(CategoryController.deleteCategory));

export default router;
