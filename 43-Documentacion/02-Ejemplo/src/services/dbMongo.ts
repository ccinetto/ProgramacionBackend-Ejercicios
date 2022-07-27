import Config from '../config'
import mongoose from "mongoose";
import { Logger } from './logger';

export default class MongoDBClient {
	private static instance: MongoDBClient;

	static async connect(local = false) {
		if(!MongoDBClient.instance) {
			Logger.info('Estableciendo conexion Mongo')
			MongoDBClient.instance = new MongoDBClient();
			const srv = local ? Config.MONGO_LOCAL_SRV : Config.MONGO_ATLAS_SRV;
      await mongoose.connect(srv, {});
		}
    return MongoDBClient.instance;
	}

  async disconnect() {
    await mongoose.disconnect();
  }
}