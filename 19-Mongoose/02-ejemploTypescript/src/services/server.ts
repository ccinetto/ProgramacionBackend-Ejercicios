import express, {ErrorRequestHandler} from 'express';
import mainRouter from '../routes/index';
import http from 'http';

const app = express();

app.use(express.json());

app.use('/api', mainRouter);

const errorHandlerFunction : ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
}
app.use(errorHandlerFunction);

const httpServer = new http.Server(app);

export default httpServer;
