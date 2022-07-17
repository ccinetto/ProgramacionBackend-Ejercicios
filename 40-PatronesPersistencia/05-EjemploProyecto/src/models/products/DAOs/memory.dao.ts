import { ApiError, ErrorStatus } from '../../../services/error';
import {
  ProductI,
  ProductBaseClass,
  ProductQuery,
} from '../products.interfaces';
import { ProductsDTO } from '../products.interfaces';

export default class ProductDao implements ProductBaseClass {
  private static instance: ProductDao;
  private productos: ProductI[] = [];

  constructor() {
    const mockData = [
      { _id: '1', nombre: 'lapiz', precio: 200, stock: 15 },
      { _id: '2', nombre: 'cartuchera', precio: 250, stock: 15 },
      { _id: '3', nombre: 'boligoma', precio: 260, stock: 15 },
    ];

    mockData.forEach((aMock) => this.productos.push(aMock));
  }

  static async getInstance(local: boolean = false) {
    if (!ProductDao.instance) {
      console.log('Inicializamos DAO Products');
      ProductDao.instance = new ProductDao();
    }
    return ProductDao.instance;
  }

  findIndex(id: string) {
    return this.productos.findIndex((aProduct) => aProduct._id == id);
  }

  find(id: string): ProductI | undefined {
    return this.productos.find((aProduct) => aProduct._id === id);
  }

  async get(id?: string): Promise<ProductsDTO[] | ProductsDTO> {
    if (id) {
      const index = this.findIndex(id);
      if (index < 0)
        throw new ApiError('Documento no existe', ErrorStatus.NotFound);

      return new ProductsDTO(this.productos[index]);
    }
    return this.productos.map((aResult) => new ProductsDTO(aResult));
  }

  async add(data: ProductI): Promise<ProductsDTO> {
    if (!data.nombre || !data.precio || !data.stock)
      throw new ApiError('Invalid Data', ErrorStatus.BadRequest);

    const newItem = {
      _id: (this.productos.length + 1).toString(),
      ...data,
    };

    this.productos.push(newItem);

    return new ProductsDTO(newItem);
  }

  async update(id: string, newProductData: ProductI): Promise<ProductsDTO> {
    const index = this.findIndex(id);
    const oldProduct = this.productos[index];

    const updatedProduct: ProductI = { ...oldProduct, ...newProductData };
    this.productos.splice(index, 1, updatedProduct);

    return new ProductsDTO(updatedProduct);
  }

  async delete(id: string): Promise<void> {
    const index = this.findIndex(id);
    this.productos.splice(index, 1);
  }

  async query(options: ProductQuery): Promise<ProductsDTO[]> {
    type Conditions = (aProduct: ProductI) => boolean;
    const query: Conditions[] = [];

    if (options.nombre)
      query.push((aProduct: ProductI) => aProduct.nombre == options.nombre);

    return this.productos
      .filter((aProduct) => query.every((x) => x(aProduct)))
      .map((aResult) => new ProductsDTO(aResult));
  }
}
