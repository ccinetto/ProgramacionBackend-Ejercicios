import Config from './config';
import Server from './services/server';

Server.listen(Config.PORT, () =>
  console.log(`Server UP on ${Config.PORT}`)
);
