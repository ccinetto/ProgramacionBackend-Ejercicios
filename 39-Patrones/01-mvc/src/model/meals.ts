import { Schema } from 'mongoose';
import { MongoDB } from '../services/mongodb';

export interface MealI {
  name: string;
  type: string;
  price: number;
}

const mealSchema = new Schema<MealI>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const MongoAtlas = new MongoDB();
const AtlasMongoose = MongoAtlas.getConnection();
export const MealModel = AtlasMongoose.model<MealI>('meal', mealSchema);
