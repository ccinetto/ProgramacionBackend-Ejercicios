/* eslint-disable no-console */
import Config from '../config';
import mongoose from 'mongoose';

export class MongoDBClient {
  private static client: MongoDBClient;

  private constructor() {}

  isValidId(id: string): boolean {
    return mongoose.isValidObjectId(id);
  }

  static async getConnection () {
    if(!MongoDBClient.client){
      console.log('Inicializamos la conexion');
      await mongoose.connect(Config.MONGO_ATLAS_SRV, {});
      MongoDBClient.client = new MongoDBClient();
    }
    return MongoDBClient.client;
  }
}
