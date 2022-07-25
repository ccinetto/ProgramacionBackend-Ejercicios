import dotenv from 'dotenv';
dotenv.config();

let mongoDBSRV = process.env.MONGO_ATLAS_SRV || 'mongosrv';

if (
  process.env.NODE_ENV === 'TEST_INT' ||
  process.env.NODE_ENV === 'TEST_E2E'
) {
  console.log('Estamos en un test. usamos SRV db test');
  mongoDBSRV = process.env.MONGO_ATLAS_TEST_SRV || 'testSRV';
}

export default {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: mongoDBSRV,
};
