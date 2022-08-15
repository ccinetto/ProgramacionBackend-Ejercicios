import { MongoDb } from '../services/database.ts';
import { Bson } from '../../deps.ts';
export interface Quote {
  _id: Bson.ObjectId;
  quote: string;
  author: string;
}

export const QuotesModel = MongoDb.collection<Quote>('quotes');
