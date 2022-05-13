import { denormalizeData } from "./normalizer.js";

export const socket = io();

const mensajesContainer = document.getElementById('mensajesContainer');

socket.on('receiveMessages', (mensajes) => {
	console.log('response');
  console.log(mensajes);

	console.log('denormalized data');
	const denormalizedData = denormalizeData(mensajes)
  console.log(denormalizedData);

	denormalizedData.forEach(mensaje => {
		let p = document.createElement('p');
		p.innerHTML = `
					<span class='mx-2 mensaje__email'>${mensaje.author.email}</span>
					<span class='mx-2 mensaje__time'>${mensaje.author.nombre}</span>
					<span class='mx-2 mensaje__text'>${mensaje.text}</span>`;
		mensajesContainer.appendChild(p);
	});
});
