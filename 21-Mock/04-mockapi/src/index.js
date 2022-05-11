import server from './services/server';

const port = 8080;

server.listen(port, () => console.log(`escuchando puerto ${port}`));