const socketIo = require('socket.io');
const { formatMessages } = require('../utils/messages');
const {
  addUser,
  getCurrentUser,
  removeUser,
  getRoomUsers,
} = require('../controllers/users');

const data = {
  username: undefined,
  text: undefined,
};

let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');

    //New User Joined room
    //https://socket.io/docs/v3/rooms/
    socket.on('JoinRoom', async (msg) => {
      // Agregamos el usuario a nuestra """""DB"""""
      await addUser(socket.client.id, msg.username, msg.room);
      const user = await getCurrentUser(socket.client.id);

      // Agrego al usuario a la sala correspondiente
      socket.join(user.room);  //meto a este socket en particular a la sala

      //mandamos mensaje de bienvenida al usuario que se conecto
      //mensaje privado entre server y el cliente
      socket.emit('message', formatMessages({
        username: 'CHATBOT-BOTI',
        text: 'Welcome to the chat!'
      }));

      //le aviso a los demas integrantes de la sala que se unio un nuevo usuario
      //mensaje entre el server y todos los integrantes de la sala salvo el usuario que envio el mensaje
      //se usa broadcast y el to(nombreSala)
      data.text = `${user.username} has joined the chat!`;

      //BroadCast when a user connects
      socket.broadcast.to(user.room).emit('message', formatMessages(data));

      //Mando a todos info actualizada de quienes estan en la sala
      //Mensaje del server a todos los usuarios de la sala
      const roomInfo = {
        room: user.room,
        users: getRoomUsers(user.room),
      };
      io.to(user.room).emit('roomUsers', roomInfo);
    });

    //Let everyone knows that a user left the chat
    socket.on('disconnect', () => {
      const user = getCurrentUser(socket.client.id);
      if (user) {
        removeUser(socket.client.id);
        data.username = 'CHATBOT-BOTI';
        data.text = `${user.username} has left the chat`;
        io.to(user.room).emit('message', formatMessages(data));

        //Send Room info
        const roomInfo = {
          room: user.room,
          users: getRoomUsers(user.room),
        };
        io.to(user.room).emit('roomUsers', roomInfo);
      }
    });

    //Listen for chat messages
    socket.on('chatMessage', (msg) => {
      const user = getCurrentUser(socket.client.id);
      data.username = user.username;
      data.text = msg;
      io.to(user.room).emit('message', formatMessages(data));
    });
  });

  return io;
};

const getWsServer = () => {
  return io;
}

module.exports = {
  initWsServer,
  getWsServer
};
