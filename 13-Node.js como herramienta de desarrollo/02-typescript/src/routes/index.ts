import { Router} from "express";
import routerRecurso1 from './recurso1';
import routerRecurso2 from './recurso2';

const router = Router();

router.use('/recurso1', routerRecurso1);
router.use('/recurso2', routerRecurso2);

let pepe;

pepe = 4;

export default router;