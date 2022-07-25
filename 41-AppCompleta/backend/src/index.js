import Config from './config';
import Server from './services/server';
import Logger from './services/logger';
import MongoDBClient from './services/mongoDBClient';

const { PORT } = Config;

const init = async () => {
  if (Config.PERSISTENCIA === 'MONGO') await MongoDBClient.connect();
  const server = Server.listen(PORT, () => {
    Logger.info(`Servidor escuchando en el puerto ${PORT}`);
  });

  server.on('error', (error) => Logger.error(`Error en servidor: ${error}`));
};

init();
