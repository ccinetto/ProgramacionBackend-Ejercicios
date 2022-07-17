import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'mongosrv',
  MONGO_ATLAS_DB: process.env.MONGO_ATLAS_DB || 'db',
};
