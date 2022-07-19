import Logger from '../../../services/logger'
import NoticiasMemDAO from './memoria.js';
import NoticiasFSDAO from './fs.js';
import NoticiasMongoDAO from './mongo.js';

export default class NoticiasFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case 'MEM':
        Logger.info('Retornando instancia Memoria de Noticias');
        return new NoticiasMemDAO();
      case 'FS':
        Logger.info('Retornando instancia FS de Noticias');
        return new NoticiasFSDAO();
      case 'MONGO':
        Logger.info('Retornando instancia Mongo de Noticias');
        return new NoticiasMongoDAO();
			default:
				Logger.info('Retornando instancia Por defecto (Mongo) de Noticias');
        return new NoticiasMongoDAO();
    }
  }
}
