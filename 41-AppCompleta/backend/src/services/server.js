import express from 'express';
import * as http from 'http';
import path from 'path';
import cors from 'cors';
import Logger from './logger';
import MainRouter from '../routes';

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json());

const whiteList = ['https://www.google.com.ar', 'http://localhost:3000', 'https://www.clarin.com'];

const validateCors = (req, callback) => {
  const origin = req.header('Origin');

  if(whiteList.indexOf(origin) < 0 )  return callback(null, {origin: false});

  if(origin === whiteList[0] && req.method === 'GET') return callback(null, {origin: false});

  return callback(null, {origin: true});
}

app.use(cors(validateCors));

app.use('/api', MainRouter.start());

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
