import express from 'express';
import data from '../data';
import compression from 'compression';

const app = express();

app.use(compression());

app.get('/', (req, res) => {
  res.send(data);
});

export default app;
