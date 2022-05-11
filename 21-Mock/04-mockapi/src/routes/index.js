import {Router} from 'express';
import recurso1Router from './recurso1';
const router = Router();

router.get('/', (req, res) => {
    res.json("HOLA");
})

router.use('/recurso1',recurso1Router);

export default router;