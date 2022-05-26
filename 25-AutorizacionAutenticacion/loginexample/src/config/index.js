import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  PUERTO : process.env.PUERTO || 8080,
}