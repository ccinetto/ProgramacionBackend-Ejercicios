import 'dotenv/config';
import server from './services/server';
import { initMongoDB } from './services/database';

const init = async () => {
  await initMongoDB();
  const puerto = process.env.PORT || 8080;

  server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
};

init();
