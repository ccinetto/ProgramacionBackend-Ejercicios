import { ProductsModel } from "../services/database";


export const getAllProducts = async () => {
	const products = await ProductsModel.get();

	return products;
}

export const createProduct = async (name: string, stock: number, price: number) => {
	const newProduct = await ProductsModel.create({
		name, stock, price
	})

	return newProduct;
}