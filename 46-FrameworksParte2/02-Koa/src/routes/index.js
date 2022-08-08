import Router from 'koa-router';
import LibrosRouter from './libros';

const router = new Router({
  prefix: '/api',
});

router.use(LibrosRouter);
router.get('/', (ctx, next) => {

})

export default router.routes();
