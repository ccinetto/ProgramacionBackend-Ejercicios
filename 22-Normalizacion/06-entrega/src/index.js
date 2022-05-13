import Config from './config';
import Server from './services/server';
import { connectToDB } from './services/db';
import { initWsServer } from './services/socket';

const puerto = Config.PORT;

const init = async () => {
  await connectToDB();
  const io = initWsServer(Server);
  Server.listen(puerto, () => console.log(`Server up puerto ${puerto}`));
};

init();
