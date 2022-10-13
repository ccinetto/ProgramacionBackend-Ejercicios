const express = require('express');
const RouterPrincipal = require('../routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
	console.log('EJECUTO MIDDLEWARE APP PRINCIPAL')
	next();
})

app.use(express.static('public'));
app.use('/api', RouterPrincipal);


app.use((err, req, res, next) => {

  console.error(err.stack);
  res.status(500).send({
		msg: 'Se pudrio todo'
	});
});

module.exports = app;