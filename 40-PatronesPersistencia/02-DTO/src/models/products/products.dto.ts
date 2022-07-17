import { ProductI } from './product.interfaces';

export default class ProductsDTO {
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
