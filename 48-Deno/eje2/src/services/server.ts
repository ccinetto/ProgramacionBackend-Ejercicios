import { Application } from '../../deps.ts';

import router from '../routes/index.ts';
import { logger } from '../middleware/index.ts';

const app = new Application();

app.use(logger);
app.use(router)

export default app;
