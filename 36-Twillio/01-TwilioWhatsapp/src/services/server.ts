import express from 'express';
import mainRouter from '../routes';
import helment from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helment());
app.use('/api', mainRouter);

export default app;
