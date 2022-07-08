import { ApiError, CartAPI, ErrorStatus } from '../api';

const getCart = async (req, res) => {
  const { user } = req;
  const cart = await CartAPI.getCardByUser(user._id);

  res.json({
    data: cart,
  });
};

const addProduct = async (req, res) => {
  const { user } = req;
  const { productId, amount } = req.body;

  if (!productId || !amount)
    throw new ApiError('Invalid Body Parameters', ErrorStatus.BadRequest);

  const cart = await CartAPI.getCardByUser(user._id);

  const result = await CartAPI.addProduct(cart._id, productId, amount);

  res.json({ msg: 'Product Added', data: result });
};

const deleteProduct = async (req, res) => {
  const { user } = req;
  const { productId, amount } = req.body;

  if (!productId)
    throw new ApiError('Invalid Body Parameters', ErrorStatus.BadRequest);

  const cart = await CartAPI.getCardByUser(user._id);

  const result = await CartAPI.deleteProducts(cart._id, productId, amount);

  res.json({ msg: 'Product Deleted', data: result });
};

const createOrder = async (req, res) => {
  const { user } = req;
  const cart = await CartAPI.getCardByUser(user._id);

  await CartAPI.createOrder(cart._id);

  res.json({
    msg: 'Order Created',
  });
};

export default {
  getCart,
  addProduct,
  deleteProduct,
  createOrder,
};
