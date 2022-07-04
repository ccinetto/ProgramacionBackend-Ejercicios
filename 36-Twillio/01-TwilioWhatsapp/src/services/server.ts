import express from 'express';
import mainRouter from '../routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', mainRouter);

export default app;
