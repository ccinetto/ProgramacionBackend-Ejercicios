import * as dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'Atlassrv',
};
