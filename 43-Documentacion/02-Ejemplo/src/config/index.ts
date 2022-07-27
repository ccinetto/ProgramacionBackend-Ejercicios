import dotenv from 'dotenv';
import {Logger} from '../services/logger';

dotenv.config();

let mongoDBSRV = process.env.MONGO_ATLAS_SRV || 'mongosrv';

if (
  process.env.NODE_ENV === 'TEST_INT' ||
  process.env.NODE_ENV === 'TEST_E2E'
) {
  Logger.info('Estamos en un test. usamos SRV db test');
  mongoDBSRV = process.env.MONGO_ATLAS_TEST_SRV || 'testSRV';
}

export default {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: mongoDBSRV,
  MONGO_LOCAL_SRV: process.env.MONGO_LOCAL_SRV || 'localSrv'
};
