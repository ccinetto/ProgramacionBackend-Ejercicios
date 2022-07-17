export interface ProductI {
  _id?: string;
  nombre: string;
  precio: number;
  stock: number;
}

export interface ProductQuery {
  nombre?: string;
  precio?: number;
  stock?: number;
}

export interface ProductBaseClass {
  get(id?: string): Promise<ProductsDTO[] | ProductsDTO>;
  add(data: ProductI): Promise<ProductsDTO>;
  update(id: string, newProductData: ProductI): Promise<ProductsDTO>;
  delete(id: string): Promise<void>;
  query(options: ProductQuery): Promise<ProductsDTO[]>;
}

export class ProductsDTO {
  id: string;
  nombre: string;
  precioARS: number;
  precioUSD: number;
  hasStock: boolean;
  stock: number;

  constructor(data: ProductI) {
    this.nombre = data.nombre;
    this.precioARS = data.precio;
    this.precioUSD = data.precio / 200;
    this.hasStock = data.stock > 0;
    this.stock = data.stock;
    this.id = data._id || '';
  }
}
