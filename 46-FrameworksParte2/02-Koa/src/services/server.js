import Koa from 'koa';
import mainRouter from '../routes';
import koaBody from 'koa-body';
import { middleware1, middleware2, middleware3 } from '../middlewares/ejemplos';

const app = new Koa();

app.use(koaBody());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
		const message = err.message || 'Internal Server Error';
    ctx.status = err.statusCode || 500;
    ctx.body = { error: message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.use(mainRouter);

export default app;
