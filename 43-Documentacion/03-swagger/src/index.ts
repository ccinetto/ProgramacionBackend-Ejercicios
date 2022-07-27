import Server from './services/server';
import Config from './config';
import { Logger } from './services/logger';

const puerto = Config.PORT;

Server.listen(puerto, () => Logger.info(`Server up puerto ${puerto}`));
