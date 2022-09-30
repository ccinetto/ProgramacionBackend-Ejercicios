const socketIo = require('socket.io');
const { ProductosController } = require('../controller/productos');

let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');
    console.log(new Date());

    socket.on('allProducts', async () => {
      const productos = await ProductosController.getAll();

      productos.forEach((unProducto) => {
        socket.emit('producto', unProducto);
      });
    });
  });

  return io;
};

const socketEmit = (eventName, message) => {
  io.emit(eventName, message);
};

module.exports = {
  initWsServer,
  socketEmit,
};
