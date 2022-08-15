import { Router, Context } from '../../deps.ts';
import QuotesRouter from './quotes.ts';

const router = new Router({
  prefix: '/api',
});

router.use(QuotesRouter.routes());

router.get('/', (ctx: Context) => {
  const { response } = ctx;
  response.status = 200;
  response.body = {
    success: true,
  };
});

export default router;
