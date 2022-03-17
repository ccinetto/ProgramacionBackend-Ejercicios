const http = require('http');

const obtenerMensaje = () => {
  const fyh = new Date();
  const hora = fyh.getHours();

  let msg = 'Buenos Dias';

  if (hora >= 13 && hora <= 19) msg = 'Buenas Tardes';

  if (hora >= 20 || hora <= 5) msg = 'Buenas Noches';

  return msg;
};

const server = http.createServer((request, response) => {
  const mensaje = obtenerMensaje();
  response.end(mensaje);
});

const puerto = 8080;
server.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
