const server = require('./services/server');
const { initWsServer, getWsServer } = require('./services/socket');

// listening to port...
const port = 8080;

//Init SocketIo Server
const init = async () => {
	initWsServer(server);  //aca esta la magia
	server.listen(port, () => console.log(`Server Up port ${port}`));
}

init();

