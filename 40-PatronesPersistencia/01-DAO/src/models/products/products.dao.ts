import { ProductModel } from './products.schema';
import { MongoDBClient } from '../../services/dbMongo';
import { ProductI } from './product.interfaces';

export default class ProductDao {
  private static instance: ProductDao;
  private static client : MongoDBClient;
  productos = ProductModel;

  private constructor() {}

  static async getInstance () {
    if(!ProductDao.instance) {
      console.log('Inicializamos DAO Products');
      await MongoDBClient.getConnection();
      ProductDao.instance = new ProductDao();
      ProductDao.client = await MongoDBClient.getConnection();
    }
    return ProductDao.instance;
  }

  async get(id?: string): Promise<ProductI[]> {
    let output: ProductI[] = [];

    if (id) {
      if (ProductDao.client.isValidId(id)) {
        const document = await this.productos.findById(id);
        if (document) output.push(document);
      }
    } else {
      output = await this.productos.find();
    }

    return output;
  }

  async add(data: ProductI): Promise<ProductI> {
    const newProduct = await this.productos.create(data);
    console.log('\n\n\n new product');
    console.log(newProduct)
    return newProduct;
  }

  async update(id: string, newProductData: ProductI): Promise<ProductI> {
    return this.productos.findByIdAndUpdate(id, newProductData, { new: true });
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }
}