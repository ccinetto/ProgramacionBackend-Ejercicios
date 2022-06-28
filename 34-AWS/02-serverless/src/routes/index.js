import UserRouter from './users'
import { Router } from 'express';

const router = Router();

router.use('/users', UserRouter);

export default router;
