import { Context, Next } from 'koa';

export const middleware1 = (ctx: Context, next: Next) => {
  console.log('APLICO PRIMER MIDDLEWARE 1');
  ctx.body = { msg1: 'Primer Middleware' };
  next();
};

export const middleware2 = (ctx: Context, next: Next) => {
  console.log('APLICO PRIMER MIDDLEWARE 2 ');
  console.log(ctx.body);
  ctx.body = { msg: 'Middleware 2' };
  next();
};

export const middleware3 = (ctx: Context, next: Next) => {
  console.log('APLICO PRIMER MIDDLEWARE 3 ');
  console.log(ctx.body);
  ctx.body = { msg: 'Middleware 3' };
  next();
};
