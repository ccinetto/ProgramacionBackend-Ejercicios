const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static('public'));

const viewsFolderPath = path.resolve(__dirname, '../../views');
const layoutsFolderPath = `${viewsFolderPath}/layouts`;
const partialsFolderPath = `${viewsFolderPath}/partials`;
const defaultLayoutPath = `${layoutsFolderPath}/index.hbs`;

app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);

app.engine('hbs', engine({
	//configuracion de handlebars
	layoutsDir: layoutsFolderPath,
	partialsDir: partialsFolderPath,
	extname: 'hbs',
	defaultLayout: defaultLayoutPath,
}));

app.get('/', (req, res) => {
	const objetoConDataDinamica = {
		productos: [
			{name: 'mate', estilo: 'toplaner'},
			{name: 'cafe', estilo: 'midlaner'},
			{name: 'harina', estilo: 'toplaner'},
			{name: 'palmitos', estilo: 'midlaner'},
		],
		persona: {
			nombre: 'Carlitos',
			apellido: "tevez",
		},
		mostrarProductos: false,
		mostrar: false,
	};
	res.render('main', objetoConDataDinamica)
})

app.get('/visitas', (req, res) => {
	const objetoConDataDinamica = {
		nombre: 'Martin',
		apellido: "Palermo"
	};
	res.render('main', objetoConDataDinamica)
})

app.get('/contactenos', (req, res) => {
	const objetoConDataDinamica = {
		nombre: 'Daniel',
		apellido: "Pasarella"
	};
	res.render('main', objetoConDataDinamica)
})


app.get('/test', (req, res) => {
	res.json({
		msg: 'ok'
	})
})

module.exports = app;