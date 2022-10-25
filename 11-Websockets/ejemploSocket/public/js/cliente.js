const socket = io.connect();   //el cliente esta armando el tunel con el server

const form = document.getElementById('miFormularioFachero');
const author = document.getElementById('inputUsername')
const text = document.getElementById('inputCuentameAlgo')

form.addEventListener('submit', (ev) => {
	ev.preventDefault();   //receta de cocina. significa no hagas lo que siempre haces

	console.log('SE HIZO CLICK EN SUBMIT');

	const cartaParaElServer = {
			author: author.value,
			text: text.value,
	}

	console.log(cartaParaElServer);

	socket.emit('nombreDeEventoSuperLindo', cartaParaElServer);

	author.value = '';
	text.value = '';
});

socket.on('notificacionPersonal', (data) => {
	console.log(`El server me mando una notificacion personal con ${JSON.stringify(data)}`)
});

socket.on('notificacionGeneral', (data) => {
	console.log(`El server me mando una notificacion general con ${JSON.stringify(data)}`)
});


console.log('HOLA!!!!!')