import dotenv from 'dotenv';

dotenv.config();

export default {
  REDIS_URL: process.env.REDIS_URL || 'redisURL',
  REDIS_PORT: process.env.REDIS_PORT || '9000',
  REDIS_PSW: process.env.REDIS_PSW || 'redisPass',
  PORT: process.env.PORT || 8080,
};
