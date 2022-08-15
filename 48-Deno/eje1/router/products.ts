import { Router } from '../depts.ts';
import { ProductController } from '../controller/products.ts';
const router = Router();


router.get('/', ProductController.getAll);
router.get('/:id', ProductController.get);
router.post('/', ProductController.add);

export default router;