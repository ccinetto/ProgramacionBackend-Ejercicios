import {Router} from 'express';
import {Recurso1Controller} from '../controllers/recurso1';

const router = Router();

router.get('/:id?', Recurso1Controller.leer)
router.post('/generar/:cant?', Recurso1Controller.generar)
router.put('/:id', Recurso1Controller.actualizar)
router.delete('/:id', Recurso1Controller.borrar)

export default router;