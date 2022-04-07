const express = require('express');
const path = require('path')
const http = require('http')
const io = require('socket.io')

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;

app.use(express.static('public'));

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

const myServer = http.Server(app);

myServer.listen(puerto, () => console.log('Server up en puerto', puerto));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hola', (req, res) => {
  res.json({ msg: 'hola' });
});

const myWSServer = io(myServer);

const messages = [];

myWSServer.on('connection', function (socket) {
  console.log('\n\nUn cliente se ha conectado');
  console.log(`ID DEL SOCKET DEL CLIENTE => ${socket.client.id}`);
  console.log(`ID DEL SOCKET DEL SERVER => ${socket.id}`);

  socket.on('new-message', function (data) {
    const newMessage = {
      socketId: socket.client.id,
      message: data,
    };
    console.log(newMessage);
    messages.push(newMessage);

    //PARA RESPONDERLE A UN SOLO CLIENTE
    // socket.emit('messages', messages);

    //PARA ENVIARLE EL MENSAJE A TODOS
    // myWSServer.emit('messages', messages);

    //PARA ENVIARLE MENSAJE A TODOS MENOS AL QUE ME LO MANDO
    socket.broadcast.emit('messages', messages);
  });

  socket.on('askData', (data) => {
    console.log('ME LLEGO DATA');
    socket.emit('messages', messages);
  });
});
