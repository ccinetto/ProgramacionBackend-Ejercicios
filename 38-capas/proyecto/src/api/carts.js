import { CartModel } from '../models';
import { ProductsAPI, ApiError, ErrorStatus } from './index';

const create = (userId) => CartModel.create({ userId });

const getCardByUser = (userId) => CartModel.findOne({ userId });

const addProduct = async (cartId, productId, items) => {
  const product = await ProductsAPI.find(productId);

  if (!product)
    throw new ApiError('product does not exists', ErrorStatus.BadRequest);

  if (!product.stock || items > product.stock)
    throw new ApiError('Stock not available', ErrorStatus.BadRequest);

  const cart = await CartModel.findById(cartId);

  if (!cart) ApiError('Cart does not exist', ErrorStatus.BadRequest);

  const index = cart.products.findIndex(
    (aProduct) => aProduct.productId == productId,
  );

  if (index < 0) {
    const newProductItem = {
      productId: productId,
      items,
    };
    cart.products.push(newProductItem);
  } else cart.products[index].items += items;

  await cart.save();

  await ProductsAPI.removeStock(productId, items);

  return cart;
};

const deleteProducts = async (cartId, productId, items) => {
  const product = await ProductsAPI.find(productId);

  if (!product)
    throw new ApiError('product does not exists', ErrorStatus.BadRequest);

  const cart = await CartModel.findById(cartId);

  if (!cart) ApiError('Cart does not exist', ErrorStatus.BadRequest);

  const index = cart.products.findIndex(
    (aProduct) => aProduct.productId == productId,
  );

  if (index < 0)
    throw new ApiError('Product not found', ErrorStatus.BadRequest);

  if (!items || cart.products[index].items <= items) {
    await ProductsAPI.addStock(productId, cart.products[index].items);
    cart.products.splice(index, 1);
  } else {
    await ProductsAPI.addStock(productId, items);
    cart.products[index].items -= items;
  }

  await cart.save();

  return cart;
};

export default { create, addProduct, deleteProducts, getCardByUser };
