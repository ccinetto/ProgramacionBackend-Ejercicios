const express = require('express');
const mainRouter = require('./routes');

const app = express();
app.use(express.static('public'));
app.listen(8080, () => console.log('ESTAMOS LISTOS'));

app.use(express.json())

app.use('/api', mainRouter);