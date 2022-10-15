const express = require('express');
const mainRouter = require('../routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', mainRouter);

app.get('/', (req, res) => {
	res.json({
		msg: 'ok app'
	})
})

//este middleware de errores se encarga de atajar todos los errores que haya en nuestras rutas
//aca metenmos la logica para ver que le respondemos al cliente (si un error generico o uno definido)
//ojo con las rutas que ejecutan codigo asincronico.
app.use((err, req, res, next) => {
		const status = err.status || 500;
		const message = err.message || 'Internal Server Error';

		res.status(status).json({
			message,
		})
});

module.exports = app;