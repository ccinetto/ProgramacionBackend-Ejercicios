import express from 'express';
import data from '../data';
import compression from 'compression';

const app = express();

app.get('/normal', (req, res) => {
  res.send(data);
});

app.get('/gzip', compression(), (req, res) => {
  res.send(data);
});

export default app;
