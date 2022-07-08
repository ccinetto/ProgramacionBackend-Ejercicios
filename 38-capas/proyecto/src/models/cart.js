import mongoose from 'mongoose';
import { productsCollectionName } from './products';
import { userCollectionName } from './user';

export const cartCollectionName = 'cart';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userCollectionName,
      required: true,
    },
    products: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: productsCollectionName,
          required: true,
        },
        items: { type: Number, default: 1 },
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

export const CartModel = mongoose.model(cartCollectionName, cartSchema);
