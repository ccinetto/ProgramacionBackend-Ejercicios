import { MongoClient } from '../../deps.ts';
import Config from '../config/index.ts';

const client = new MongoClient();

const db = await client.connect({
  db: Config.MONGO_DBNAME,
  tls: true,
  servers: [
    {
      host: Config.MONGO_CLUSTER_URL,
      port: 27017,
    },
  ],
  credential: {
    username: Config.MONGO_USERNAME,
    password: Config.MONGO_PSW,
    db: Config.MONGO_DBNAME,
    mechanism: 'SCRAM-SHA-1',
  },
});

export const MongoDb = db;
