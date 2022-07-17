import { ProductModel } from './products.schema';
import { MongoDBClient } from '../../services/dbMongo';
import { ProductI } from './product.interfaces';
import ProductsDTO from './products.dto';
import { ApiError, ErrorStatus } from '../../services/error';

class ProductDao {
  private static instance: ProductDao;
  private static client: MongoDBClient;
  productos = ProductModel;

  private constructor() {}

  static async getInstance() {
    if (!ProductDao.instance) {
      console.log('Inicializamos DAO Products');
      await MongoDBClient.getConnection();
      ProductDao.instance = new ProductDao();
      ProductDao.client = await MongoDBClient.getConnection();
    }
    return ProductDao.instance;
  }

  isValid(id: string): boolean {
    return ProductDao.client.isValidId(id);
  }

  async get(id?: string): Promise<ProductsDTO[] | ProductsDTO> {
    let output: ProductI[] = [];

    if (id) {
      const document = await this.productos.findById(id);
      if (document) return new ProductsDTO(document);
      else throw new ApiError('Documento no existe', ErrorStatus.NotFound);
    }
    output = await this.productos.find();
    return output.map((aProduct) => new ProductsDTO(aProduct));
  }

  async add(data: ProductI): Promise<ProductsDTO> {
    const newProduct = await this.productos.create(data);
    return new ProductsDTO(newProduct);
  }

  async update(id: string, newProductData: ProductI): Promise<ProductsDTO> {
    const result = await this.productos.findByIdAndUpdate(id, newProductData, {
      new: true,
    });
    if (!result) throw new ApiError('Documento no existe', ErrorStatus.NotFound);
    return new ProductsDTO(result);
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }
}

export default ProductDao;
