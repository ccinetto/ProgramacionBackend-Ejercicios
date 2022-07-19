import dotenv from 'dotenv';
dotenv.config();

export default {
	NODE_ENV : process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'mongosrv',
  PERSISTENCIA: process.env.PERSISTENCIA || 'MEM'
};
