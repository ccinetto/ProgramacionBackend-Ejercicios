import Router from 'koa-router';
import app from '../services/server';
import LibrosRouter from './libros';

const router = new Router({
  prefix: '/api',
});

router.use(LibrosRouter);


router.get('/', async (ctx, next) => {

})

export default router.routes();
