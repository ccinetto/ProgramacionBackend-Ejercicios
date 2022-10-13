const { Router } = require('express');
const UsuariosRouter = require('./usuarios');

const rutaPrincipal = Router();

rutaPrincipal.use((req, res, next) => {
	console.log('EJECUTO MIDDLEWARE RUTA PRINCIPAL')
	next();
})

rutaPrincipal.use('/usuarios', UsuariosRouter);


module.exports = rutaPrincipal;