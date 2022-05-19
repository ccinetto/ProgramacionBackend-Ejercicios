
import { RelationalDatabase } from "./DAO/mysql";
import { ProductsMongoDao } from "./DAO/mongo";
import { ProductosFS } from "./DAO/filesystem";

export enum TipoPersistencia {
  Memoria = 'MEM',
  FileSystem = 'FS',
  MYSQL = 'MYSQL',
  SQLITE3 = 'SQLITE3',
  LocalMongo = 'LOCAL-MONGO',
  MongoAtlas = 'MONGO-ATLAS',
  Firebase = 'FIREBASE',
}

export class ProductosFactoryDAO {
  static get( tipo: TipoPersistencia ) {
    const productsTableName = 'products';

    switch(tipo) {
      case TipoPersistencia.FileSystem:
        console.log('Retornando Instancia Products FS');
        return new ProductosFS('products.json');

      case TipoPersistencia.MYSQL: 
        console.log("Retornando instancia productos con MYSQL");
        return new RelationalDatabase(productsTableName, true)

      case TipoPersistencia.SQLITE3: 
        console.log("Retornando instancia productos con SQLITE");
        return new RelationalDatabase(productsTableName, false)

      case TipoPersistencia.MongoAtlas:
        console.log("Retornando instancia productos con MONGO");
        return new ProductsMongoDao();
        
      default: 
        console.log("Retornando instancia productos por defecto");
        return new RelationalDatabase(productsTableName, true)
    }
  }
}