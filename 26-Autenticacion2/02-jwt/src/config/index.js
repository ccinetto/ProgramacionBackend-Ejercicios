import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  PORT: process.env.PORT || 8080,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || 'secret',
};
