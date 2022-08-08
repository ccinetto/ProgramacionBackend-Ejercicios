import Router from 'koa-router';
import { LibrosController } from '../controllers/libros';

const router = new Router({
  prefix: '/libros',
});

/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', async (ctx, next) => {
  ctx.body = {
    status: 'success',
    data: LibrosController.getAll(),
  };
  ctx.status = 200;
});

/* API REST Get x ID */
router.get('/:id', async (ctx, next) => {
  const { id } = ctx.params;
  ctx.body = {
    status: 'success',
    data: LibrosController.getById(id),
  };
  ctx.status = 200;
});

/* API REST Post */
router.post('/', async (ctx, next) => {
  // Check if any of the data field not empty
  console.log(ctx.request.body);
  const data = ctx.request.body;

  const result = LibrosController.create(data)

  ctx.body = {
    status: 'success',
    data: result,
  };
  ctx.status = 201;
});

/* API REST Put */
router.put('/:id', async (ctx, next) => {
  // Check if any of the data field not empty
  const { id } = ctx.params;

  const data = ctx.request.body;

  const result = LibrosController.update(id, data)

  ctx.body = {
    status: 'success',
    data: result,
  };
  ctx.status = 200;
});

/* API REST Delete */
router.delete('/:id', async (ctx, next) => {
  const { id } = ctx.params;
  LibrosController.remove(id)

  ctx.status = 200;
  ctx.body = {
    status: 'success',
    message: `Book deleted with id: ${id}`,
  };
});

export default router.routes();
