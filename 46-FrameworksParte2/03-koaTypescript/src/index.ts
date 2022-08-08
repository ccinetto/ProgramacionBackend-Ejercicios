import app from './services/server';

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor Koa escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log('Error en Servidor Koa:', error));
