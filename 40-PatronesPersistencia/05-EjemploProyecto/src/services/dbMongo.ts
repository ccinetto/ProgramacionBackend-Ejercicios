/* eslint-disable no-console */
import Config from '../config';
import mongoose from 'mongoose';

export class MongoDBClient {
  private static client: MongoDBClient;

  private constructor() {}

  isValidId(id: string): boolean {
    return mongoose.isValidObjectId(id);
  }

  static async getConnection(local: boolean = false) {
    if (!MongoDBClient.client) {
      console.log('Inicializamos la conexion');
      const srv = local ? Config.MONGO_LOCAL_SRV : Config.MONGO_ATLAS_SRV;
      await mongoose.connect(srv, {});
      MongoDBClient.client = new MongoDBClient();
    }
    return MongoDBClient.client;
  }
}
