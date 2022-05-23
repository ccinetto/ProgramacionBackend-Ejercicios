import Config from './config';
import { connectDb } from './services/db';
import Server from './services/server';

const { PORT } = Config;

const init = async () => {
  await connectDb();
  const server = Server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });

  server.on('error', (error) => console.log(`Error en servidor: ${error}`));
};

init();
