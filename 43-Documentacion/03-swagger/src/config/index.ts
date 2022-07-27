import dotenv from 'dotenv';
dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'pasw',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'clusterUrl',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'dbName',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'dbNameLocal',
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'mongosrv',
  SESSION_SECRET: process.env.SESSION_SECRET || 'shhhhhh',
  SESSION_COOKIE_TIMEOUT_MIN: parseInt(
    process.env.SESSION_COOKIE_TIMEOUT_MIN || '10'
  ),
};

export default venv;
