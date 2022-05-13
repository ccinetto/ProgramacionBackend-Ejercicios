import dotenv from 'dotenv';
dotenv.config();

const venvs = {
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || 'dbString',
  PORT: process.env.PORT || 8080,
};

export default venvs;
