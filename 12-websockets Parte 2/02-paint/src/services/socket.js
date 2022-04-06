const socketIo = require('socket.io');
const { getLineHistory, addNewLine, resetHistory } = require('../utils/lines');

let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');

    //Le envio a cada nueva conexion el historial actual asi puede ver lo que ya se dibujo
    const history = getLineHistory();
    for (let aLine of history) {
      socket.emit('new-line', aLine);
    }

    //Recibo una linea Nueva
    socket.on('new-line', (data) => {
      console.log(data);
      addNewLine(data);
      io.emit('new-line', data);
    });

    socket.on('reset', () => {
      resetHistory();
      io.emit('reset');
    });
  });

  return io;
};

module.exports = {
  initWsServer,
};
