import mongoose, { Mongoose } from 'mongoose';
import { productsCollectionName } from './products';
import { userCollectionName } from './user';

export const cartCollectionName = 'cart';

const productItem = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: productsCollectionName,
      required: true,
    },
    items: { type: Number, default: 1 },
  },
  { _id: false },
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userCollectionName,
      required: true,
    },
    products: [productItem],
  },
  { versionKey: false, timestamps: true },
);

export const CartModel = mongoose.model(cartCollectionName, cartSchema);
