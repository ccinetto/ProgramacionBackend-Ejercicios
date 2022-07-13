import express from 'express';
import * as http from 'http';
import mainRouter from '../routes';
import path from 'path';

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../../views');
app.set('views', viewsPath);

app.use(express.json());

app.use('/api', mainRouter);

const HTTPServer = http.createServer(app);

export default HTTPServer;
