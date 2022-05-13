import { query } from 'express';
import mongoose from 'mongoose';
import Config from '../config';

export const connectToDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    await mongoose.connect(Config.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('YA ESTOY CONECTADO');
    return 'Connection Established';
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

const func = async (query) => {
  let result = [];

  result = await collection.find();

  if (query.nombre) result = await result.where('nombre', '=', query.nombre);

  if (query.minPrice)
    result = await result.where('price', '>=', query.minPrice);

  if (query.maxPrice)
    result = await result.where('price', '<=', query.maxPrice);

  return result;
};
