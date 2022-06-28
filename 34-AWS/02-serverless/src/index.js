import express from 'express';
import serverless from 'serverless-http'
import MainRouter from './routes';

const app = express();
app.use(express.json());

app.use('/api', MainRouter);

app.get('/', (req, res) => {
  res.json({
    msg: 'Hola MUNDO',
  })
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);