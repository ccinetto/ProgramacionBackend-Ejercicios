import express from 'express';
import data from '../data';

const app = express();

app.get('/', (req, res) => {
  res.send(data);
});

export default app;
