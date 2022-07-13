import Config from './config';
import ExpressServer from './services/server';

ExpressServer.listen(Config.PORT, () =>
  console.log(`Server UP on ${Config.PORT}`)
);
