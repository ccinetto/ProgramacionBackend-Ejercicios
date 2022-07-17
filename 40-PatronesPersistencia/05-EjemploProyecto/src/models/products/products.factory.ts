import ProductosFSDAO from './DAOs/fs.dao';
import ProductosAtlasDAO from './DAOs/mongo.dao';
import ProductosMemDAO from './DAOs/memory.dao';
import { Logger } from '../../services/logger';
import { PersistenceType } from '../../config';

export type ProductsDAO = ProductosAtlasDAO | ProductosMemDAO | ProductosFSDAO;

export class ProductsFactoryDAO {
  static get(type: PersistenceType) {
    switch (type) {
      case PersistenceType.Memoria:
        Logger.info('Retornando Instancia Products Memoria');
        return ProductosMemDAO.getInstance();

      case PersistenceType.FileSystem:
        Logger.info('Retornando Instancia Products File System');
        return ProductosFSDAO.getInstance();

      case PersistenceType.MongoAtlas:
        Logger.info('Retornando Instancia Products Mongo Atlas');
        return ProductosAtlasDAO.getInstance();

      case PersistenceType.LocalMongo:
        Logger.info('Retornando Instancia Products Mongo Local');
        return ProductosAtlasDAO.getInstance(true);

      default:
        Logger.info('Retornando Instancia Products Default');
        return ProductosAtlasDAO.getInstance();
    }
  }
}
