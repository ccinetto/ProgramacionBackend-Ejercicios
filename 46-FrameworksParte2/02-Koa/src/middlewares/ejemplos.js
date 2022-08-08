export const middleware1 = (ctx, next) => {
  console.log('APLICO PRIMER MIDDLEWARE 1');
  ctx.body = { msg1: 'Primer Middleware' };
  ctx.set('Header1', 'Bokita1234');
  next();
};

export const middleware2 = (ctx, next) => {
  console.log('APLICO PRIMER MIDDLEWARE 2 ');
  console.log(ctx.body);
  ctx.set('Header2', 'Pepe');
  ctx.body = { ...ctx.body, msg2: 'Middleware 2' };
  next();
};

export const middleware3 = (ctx, next) => {
  console.log('APLICO PRIMER MIDDLEWARE 3 ');
  console.log(ctx.body);
  ctx.set('Header3', 'Hola Juan Carlos');
  ctx.body = {...ctx.body, msg3: 'Middleware 3' };
  next();
};
