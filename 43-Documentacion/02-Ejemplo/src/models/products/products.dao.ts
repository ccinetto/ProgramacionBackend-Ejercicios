import { Logger } from '../../services/logger';
import { ProductModel } from './products.schema';
import { ProductI } from './product.interfaces';

export default class ProductDao {
  private static instance: ProductDao;
  productos = ProductModel;

  private constructor() {}

  static async getInstance() {
    if (!ProductDao.instance) {
      Logger.info('Inicializamos DAO Products');
      ProductDao.instance = new ProductDao();
    }
    return ProductDao.instance;
  }

  async get(id?: string): Promise<ProductI[]> {
    let output: ProductI[] = [];

    if (id) {
      const document = await this.productos.findById(id);
      if (document) output.push(document);
    } else {
      output = await this.productos.find();
    }

    return output;
  }

  async add(data: ProductI): Promise<ProductI> {
    const newProduct = await this.productos.create(data);
    return newProduct;
  }

  async update(id: string, newProductData: ProductI): Promise<ProductI> {
    return this.productos.findByIdAndUpdate(id, newProductData, { new: true });
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }
}
