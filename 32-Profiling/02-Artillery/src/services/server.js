import express from 'express';
import { PORT } from '..';
import mainRouter from '../routes';
const app = express();

app.use(express.json());

app.use('/api', mainRouter);

app.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA desde puerto ${PORT}`,
  });
});

export default app;
