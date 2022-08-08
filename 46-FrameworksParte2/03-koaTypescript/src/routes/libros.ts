import Router from 'koa-router';
import { LibrosI, libros } from '../models/libros';
import { Context, Next } from 'koa';
const router = new Router({
  prefix: '/libros',
});

/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', async (ctx: Context, next: Next) => {
  ctx.body = {
    status: 'success',
    message: libros,
  };
  ctx.status = 201;
  // throw new Error('HOLA');
  // await next();
});

/* API REST Get x ID */
router.get('/:id', (ctx: Context, next: Next) => {
  let getCurrentBook = libros.filter(function (book) {
    if (book.id == ctx.params.id) {
      return true;
    }
  });

  if (getCurrentBook.length) {
    ctx.body = getCurrentBook[0];
  } else {
    ctx.response.status = 404;
    ctx.body = {
      status: 'error!',
      message: 'Book Not Found with that id!',
    };
  }

  ctx.set('hola', 'juan carlos');
  next();
});

/* API REST Post */
router.post('/', (ctx: Context, next: Next) => {
  // Check if any of the data field not empty
  console.log(ctx.request.body);
  const { id, name, author } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: 'error',
      message: 'Please enter the data',
    };
  } else {
    let newBook = libros.push({
      id,
      name,
      author,
    });
    ctx.response.status = 202;
    ctx.body = {
      status: 'success',
      message: `New book added with id: ${id} & name: ${name}`,
    };
  }
  next();
});

/* API REST Put */
router.put('/:id', (ctx: Context, next: Next) => {
  // Check if any of the data field not empty
  const { id, name, author } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: 'error',
      message: 'Please enter the data',
    };
  } else {
    let id = ctx.params.id;
    let index = libros.findIndex((book) => book.id == id);
    libros.splice(index, 1, ctx.request.body);
    ctx.response.status = 201;
    ctx.body = {
      status: 'success',
      message: `New book updated with id: ${ctx.request.body.id} & name: ${ctx.request.body.name}`,
    };
  }
  next();
});

/* API REST Delete */
router.delete('/:id', (ctx: Context, next: Next) => {
  let id = ctx.params.id;
  let index = libros.findIndex((book) => book.id == id);
  libros.splice(index, 1);
  ctx.response.status = 200;
  ctx.body = {
    status: 'success',
    message: `Book deleted with id: ${id}`,
  };
  next();
});

export default router.routes();
