import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: {type: Boolean, default: false},
});

export const UserModel = model('user', UserSchema);
