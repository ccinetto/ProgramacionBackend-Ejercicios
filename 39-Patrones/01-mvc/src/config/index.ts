import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_SRV: process.env.MONGO_ATLAS_SRV || 'mongosrv',
  MONGO_LOCAL_URL:
    process.env.MONGO_LOCAL_URL || 'mongodb://mongodb0.example.com:27017',
  SESSION_SECRET: process.env.SESSION_SECRET || 'shhhhhh',
  SESSION_COOKIE_TIMEOUT_MIN: parseInt(
    process.env.SESSION_COOKIE_TIMEOUT_MIN || '10'
  ),
};
