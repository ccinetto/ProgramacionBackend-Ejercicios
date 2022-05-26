import Config from './config/index';
import { connectDb } from './services/db';
import Server from './services/server';

const init = async () => {
  await connectDb();
  console.log('Todo bien');
  Server.listen(Config.PORT, () => console.log(`Escuchando en el puerto ${Config.PORT}`));
}


init();