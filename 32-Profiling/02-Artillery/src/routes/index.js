import { Router } from 'express';
import MaterialRouter from './materials';

const app = Router();

app.use('/materials', MaterialRouter);

export default app;
