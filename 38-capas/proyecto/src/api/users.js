import { UserModel } from '../models';

const find = (id) => {
  if (id) return UserModel.findById(id);

  return UserModel.find();
};

const findByEmail = (email) => UserModel.findOne({ email });

const create = (newUser) => UserModel.create(newUser);

const update = (id, data) =>
  UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => UserModel.findByIdAndDelete(id);

export default {
  find,
  findByEmail,
  create,
  update,
  remove,
};
