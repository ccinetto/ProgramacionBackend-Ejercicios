import { Router } from '../../deps.ts';
import UserRouter from './users.ts';

const router = new Router().prefix('/api')

router.use(UserRouter);

export default router.routes();