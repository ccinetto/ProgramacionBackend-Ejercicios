import express from 'express';
import { original, intento1, intento2 } from './aproximacion1';

const app = express();

app.get('/original', original);
app.get('/intento1', intento1);
app.get('/intento2', intento2);

app.listen(8080, () => console.log('Ready'));
