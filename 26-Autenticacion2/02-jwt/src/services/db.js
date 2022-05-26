import mongoose from 'mongoose';
import Config from '../config';

export const connectDb = () => {
  return mongoose.connect(Config.MONGO_ATLAS_URL, {});
};
