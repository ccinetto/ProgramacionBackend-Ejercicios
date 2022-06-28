import express from 'express';
import mainRouter from '../routes';

const app = express();

app.use(express.json());
app.use('/api', mainRouter);

export default app;
