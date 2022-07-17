import fs from 'fs';
import path from 'path';
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
  private nombreArchivo: string = path.resolve(__dirname, './products.json');

  constructor() {}

  async inicializarDatos() {
    const mockData = [
      { _id: '1', nombre: 'lapiz', precio: 200, stock: 15 },
      { _id: '2', nombre: 'cartuchera', precio: 250, stock: 15 },
      { _id: '3', nombre: 'boligoma', precio: 260, stock: 15 },
    ];

    this.productos = mockData.map((aMock) => aMock);
    await this.guardar();
  }

  static async getInstance() {
    if (!ProductDao.instance) {
      console.log('Inicializamos DAO Products');
      ProductDao.instance = new ProductDao();
      await ProductDao.instance.inicializarDatos();
    }
    return ProductDao.instance;
  }

  async leer(archivo: string): Promise<void> {
    this.productos = JSON.parse(await fs.promises.readFile(archivo, 'utf-8'));
  }

  async guardar(): Promise<void> {
    console.log(this.nombreArchivo);
    await fs.promises.writeFile(
      this.nombreArchivo,
      JSON.stringify(this.productos, null, '\t'),
      { flag: 'wx' }
    );
  }

  async findIndex(id: string): Promise<number> {
    await this.leer(this.nombreArchivo);
    return this.productos.findIndex((aProduct: ProductI) => aProduct._id == id);
  }

  async find(id: string): Promise<ProductI | undefined> {
    await this.leer(this.nombreArchivo);

    return this.productos.find((aProduct) => aProduct._id === id);
  }

  async get(id?: string): Promise<ProductsDTO[] | ProductsDTO> {
    await this.leer(this.nombreArchivo);

    if (id) {
      const result = await this.find(id);
      if (!result)
        throw new ApiError('Documento no existe', ErrorStatus.NotFound);

      return new ProductsDTO(result);
    }
    return this.productos.map((aResult) => new ProductsDTO(aResult));
  }

  async add(data: ProductI): Promise<ProductsDTO> {
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    await this.leer(this.nombreArchivo);

    const newItem = {
      _id: (this.productos.length + 1).toString(),
      ...data,
    };

    this.productos.push(newItem);

    await this.guardar();

    return new ProductsDTO(newItem);
  }

  async update(id: string, newProductData: ProductI): Promise<ProductsDTO> {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    const oldProduct = this.productos[index];

    const updatedProduct: ProductI = { ...oldProduct, ...newProductData };
    this.productos.splice(index, 1, updatedProduct);

    await this.guardar();

    return new ProductsDTO(updatedProduct);
  }

  async delete(id: string): Promise<void> {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    this.productos.splice(index, 1);
    await this.guardar();
  }

  async query(options: ProductQuery): Promise<ProductsDTO[]> {
    await this.leer(this.nombreArchivo);
    type Conditions = (aProduct: ProductI) => boolean;
    const query: Conditions[] = [];

    if (options.nombre)
      query.push((aProduct: ProductI) => aProduct.nombre == options.nombre);

    if (options.precio)
      query.push((aProduct: ProductI) => aProduct.precio == options.precio);

    return this.productos
      .filter((aProduct) => query.every((x) => x(aProduct)))
      .map((aResult) => new ProductsDTO(aResult));
  }
}
