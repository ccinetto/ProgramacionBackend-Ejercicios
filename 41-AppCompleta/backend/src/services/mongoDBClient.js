import Config from '../config'
import mongoose from "mongoose";
import Logger from './logger';

export default class MongoDBClient {
	static _connect;

	static connect(local = false) {
		if(!MongoDBClient._connect) {
			Logger.info('Estableciendo conexion Mongo')
			MongoDBClient._connect = true;
			const srv = local ? Config.MONGO_LOCAL_SRV : Config.MONGO_ATLAS_SRV;
			mongoose.connect(srv, {}).then((connection) => {
				this._client = connection;
			});
		}
	}
}