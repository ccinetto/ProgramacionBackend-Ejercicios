import {TipoPersistencia,  ProductosFactoryDAO } from "../models/products/products.factory";

const ProductsApi =  ProductosFactoryDAO.get(TipoPersistencia.SQLITE3);

export const getAllProducts = async () => {
	const products = await ProductsApi.get();

	return products;
}

export const createProduct = async (name: string, stock: number, price: number) => {
	const newProduct = await ProductsApi.create({
		name, stock, price
	})

	return newProduct;
}