import mongoose from 'mongoose';
import { MongoDBClient } from '../../../services/dbMongo';
import {
  ProductI,
  ProductsDTO,
  ProductBaseClass,
  ProductQuery,
} from '../products.interfaces';
import { ApiError, ErrorStatus } from '../../../services/error';

export default class ProductDao implements ProductBaseClass {
  private static instance: ProductDao;
  private static client: MongoDBClient;
  private schema = new mongoose.Schema<ProductI>(
    {
      nombre: { type: String, required: true },
      precio: { type: Number, required: true },
      stock: { type: Number, required: true },
    },
    { versionKey: false }
  );
  private productos = mongoose.model<ProductI>('products', this.schema);

  static async getInstance(local: boolean = false) {
    if (!ProductDao.instance) {
      console.log('Inicializamos DAO Products');
      await MongoDBClient.getConnection(local);
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
      if (!this.isValid(id))
        throw new ApiError('Documento no existe', ErrorStatus.NotFound);
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
    if (!result)
      throw new ApiError('Documento no existe', ErrorStatus.NotFound);
    return new ProductsDTO(result);
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }

  async query(options: ProductQuery): Promise<ProductsDTO[]> {
    let query: ProductQuery = {};

    if (options.nombre) query.nombre = options.nombre;

    if (options.precio) query.precio = options.precio;

    const result = await this.productos.find(query);

    return result.map((aResult) => new ProductsDTO(aResult));
  }
}
