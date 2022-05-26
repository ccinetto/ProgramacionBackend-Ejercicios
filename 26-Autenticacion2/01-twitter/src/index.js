import Config from './config/index';
import { initDb } from './services/db';
import Server from './services/server';

const init = async () => {
  await initDb();
  console.log('Todo bien');
  Server.listen(Config.PUERTO, () => console.log(`Escuchando en el puerto ${Config.PUERTO}`));
}


init();