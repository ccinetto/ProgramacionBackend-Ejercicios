import { Application } from '../../deps.ts';
import mainRouter from '../routes/index.ts';

const app = new Application();

app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());

export default app;
