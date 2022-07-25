import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config();

const optionalArgsObject = {
  default: {
    persistencia: 'MEM',
  },
};

const args = minimist(process.argv, optionalArgsObject);


export default {
	NODE_ENV : process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'mongosrv',
  PERSISTENCIA: args.persistencia
};
