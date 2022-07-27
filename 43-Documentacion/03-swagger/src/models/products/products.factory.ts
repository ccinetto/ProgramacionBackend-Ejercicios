import { ProductosMemDAO } from './DAOs/memory';
import { ProductosFSDAO } from './DAOs/fs';
import { Logger } from '../../services/logger';

import path from 'path';

export enum TipoPersistencia {
  Memoria = 'MEM',
  FileSystem = 'FS',
  MYSQL = 'MYSQL',
  SQLITE3 = 'SQLITE3',
  LocalMongo = 'LOCAL-MONGO',
  MongoAtlas = 'MONGO-ATLAS',
  Firebase = 'FIREBASE',
}

export class NoticiasFactoryDAO {
  static get(tipo: TipoPersistencia) {
    switch (tipo) {
      case TipoPersistencia.FileSystem:
        Logger.info('Retornando Instancia Products FS');
        const filePath = path.resolve(__dirname, './DAOs/products.json');
        return new ProductosFSDAO(filePath);

      default:
        Logger.info('Retornando Instancia Products Default');
        return new ProductosMemDAO();
    }
  }
}
