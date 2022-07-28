import Config from './config';
import Server from './services/server';
import MongoDBClient from './services/dbMongo';
import { Logger } from './services/logger';

const init = async () => {
  const connection = await MongoDBClient.connect();
  Server.listen(Config.PORT, () => Logger.info(`Server UP on ${Config.PORT}`));

  process.on('exit', async () => {
    Logger.info('Closing Backend Server. GoodBye!')
    await connection.disconnect();
  })
};

init();


