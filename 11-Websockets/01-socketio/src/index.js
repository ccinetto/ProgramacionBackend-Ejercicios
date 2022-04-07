const express = require('express');
const http = require('http');
const io = require('socket.io');
const app = express();

const myServer = http.Server(app);

const puerto = 8080;
myServer.listen(puerto, () => console.log('Server up en puerto', puerto));

app.use(express.static('public'));

const myWSServer = io(myServer);

const clients = [];

const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

myWSServer.on('connection', (socket) => {
  console.log('Un cliente se ha conectado!');
  console.log('ID SOCKET SERVER', socket.id);
  console.log('ID SOCKET CLIENTE', socket.client.id);

  clients.push(socket.id);

  socket.on('message', (data) => {
    console.log(`El cliente ${socket.client.id} me acaba de mandar un dato`);
    console.log(data);

    // // SERVER RESPONDE Al CLIENTE QUE LE MANDO EL MENSJAE
    // socket.emit('response', data);

    //SERVER ENVIA MENSAJE A TODOS LOS CLIENTES SALVO AL CLIENTE QUE ENVIO EL MENSAJE
    socket.broadcast.emit('response', data)

    //SERVER LE ENVIA A TODOS LOS CLIENTES
    // myWSServer.emit('response', data)
  });
});

app.use(express.json());
app.post('/mensaje', (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje)
    return res.status(400).json({
      msg: 'Mandame un mensaje',
    });

  //server envia de forman random a un cliente en particular
  const index = between(0, clients.length);
  console.log(clients[index]);
  myWSServer.to(clients[index]).emit('response', {mensaje});

  res.json({
    msg: 'SALUDOS HUMANOS',
  });
});
