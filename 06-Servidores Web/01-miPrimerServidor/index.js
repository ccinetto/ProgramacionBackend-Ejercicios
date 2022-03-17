//Importo el modulo nativo HTTP para usarlo
const http = require('http');

//Creo mi Server
//la funcion que le pasamos define como se va a comportar mi server cuando llegue una peticion (request) de un cliente
const server = http.createServer((request, response) => {
  response.end('HOLA JUAN CARLOS');
});

//Indicamos en que puerto nuestro server va a estar escuchando peticiones.
//Le pasamos una funcion al final del seteo para saber que la asignacion del puerto esta bien y nuestro server esta listo

const puerto = 8080;
server.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
