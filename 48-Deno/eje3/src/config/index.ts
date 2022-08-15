import { config } from '../../deps.ts';

const {
  PORT,
  MONGO_PRIMARY_CLUSTER_URL,
  MONGO_PSW,
  MONGO_USERNAME,
  MONGO_DBNAME,
} = config();

export default {
  PORT: PORT ? Number(PORT) : 8080,
  MONGO_CLUSTER_URL: MONGO_PRIMARY_CLUSTER_URL || 'primaryclusterUrl',
  MONGO_PSW: MONGO_PSW || 'password',
  MONGO_USERNAME: MONGO_USERNAME || 'user',
  MONGO_DBNAME: MONGO_DBNAME || 'db',
};
