import express from 'express';
import mainRouter from '../routes';
import http from 'http';

const app = express();

app.use(express.json());


app.use('/api', mainRouter);

const server = new http.Server(app);

export default server

