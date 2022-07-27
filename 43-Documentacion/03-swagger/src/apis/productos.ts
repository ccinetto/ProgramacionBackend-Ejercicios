import { newProductI, ProductI } from '../models/products/products.interface';
import { NoticiasFactoryDAO } from '../models/products/products.factory';
import { TipoPersistencia } from '../models/products/products.factory';
import { ProductQuery } from '../models/products/products.interface';

/**
 * Con esta variable elegimos el tipo de persistencia
 */
const tipo = TipoPersistencia.Memoria;

class prodAPI {
  private productos;

  constructor() {
    this.productos = NoticiasFactoryDAO.get(tipo);
  }

  async getProducts(id: string | undefined = undefined): Promise<ProductI[]> {
    if (id) return this.productos.get(id);

    return this.productos.get();
  }

  async addProduct(productData: newProductI): Promise<ProductI> {
    const newProduct = await this.productos.add(productData);
    return newProduct;
  }

  async updateProduct(id: string, productData: newProductI) {
    const updatedProduct = await this.productos.update(id, productData);
    return updatedProduct;
  }

  async deleteProduct(id: string) {
    await this.productos.delete(id);
  }

  async query(options: ProductQuery) {
    return await this.productos.query(options);
  }
}

export const productsAPI = new prodAPI();
