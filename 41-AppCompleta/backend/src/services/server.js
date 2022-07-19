import express from 'express';
import * as http from 'http';
import path from 'path';
import Logger from './logger';
import MainRouter from '../routes';

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json());

const mainRouter = new MainRouter();

app.use('/api', mainRouter.start());

app.use((req, res) => {
  res.status(404).json({
    msg: 'Ruta no encontrada',
  });
});

//https://stackoverflow.com/questions/50218878/typescript-express-error-function
const errorHandler = (err, req, res, next) => {
  Logger.error(err.stack);
  const status = err.statusCode || 500;
  const msg = err.message || 'Internal Server Error';
  const stack = err.stack;
  res.status(status).send({ msg, stack });
};


app.use(errorHandler);

const HTTPServer = http.createServer(app);

export default HTTPServer;
