const express = require('express');
const path = require('path');
const http = require('http')
const io = require('socket.io')

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const myServer = http.Server(app);

myServer.listen(puerto, () => console.log('Server up en puerto', puerto));

app.get('/hola', (req, res) => {
  res.json({ msg: 'hola' });
});

const myWSServer = io(myServer);

const messages = [];

myWSServer.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');

  socket.on('new-message', function (data) {
    messages.push(data);
    socket.emit('messages', messages);
  });
});
