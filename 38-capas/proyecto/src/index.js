import Config from './config';
import { connectDb } from './services/db';
import Server from './services/server';
import Logger from './services/logger';

const { PORT } = Config;

const init = async () => {
  await connectDb();
  const server = Server.listen(PORT, () => {
    Logger.info(`Servidor escuchando en el puerto ${PORT}`);
  });

  server.on('error', (error) => Logger.error(`Error en servidor: ${error}`));
};

init();
