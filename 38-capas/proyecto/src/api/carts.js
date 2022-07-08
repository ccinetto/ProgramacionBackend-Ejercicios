import { CartModel } from '../models';

const create = (userId) => CartModel.create({ userId });

export default { create };
