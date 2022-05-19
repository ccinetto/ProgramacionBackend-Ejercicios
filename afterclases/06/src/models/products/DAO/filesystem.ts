import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

//Esto solo va a funcionar si el archivo ya existe
export class ProductosFS {
  archivo: string;

  constructor(nombreArchivo: string) {
    if(!fs.existsSync(nombreArchivo)) fs.writeFileSync(nombreArchivo, JSON.stringify([], null, '\t'))
    this.archivo = nombreArchivo;
  }

  async getData() {
    const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
    return JSON.parse(data);
  }

  async saveData(data: any) {
    await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
  }

  get(id?: any) {
    if (id) return this.getById(id);

    return this.getAll();
  }

  async create(data: any) {
    const productos = await this.getData();

    const productoNuevo = {
      id: uuidv4(),
      ...data,
    };

    productos.push(productoNuevo);

    await this.saveData(productos);

    return productoNuevo;
  }

  async update(id: number, data: any) {
    const productos = await this.getAll();

    const indice = productos.findIndex((unProducto: any) => unProducto.id === id);

    if (indice < 0) throw new Error('no existe el producto');

    const productUpdated = {
      id,
      ...data,
    };

    productos.splice(indice, 1, productUpdated);

    await this.saveData(productos);

    return productUpdated;
  }

  async delete(id: number) {
    const productos = await this.getData();

    const nuevoArray = productos.filter(
      (unProducto: any) => unProducto.id != id
    );

    await this.saveData(nuevoArray);
  }

  async getById(id: string) {
    const productos = await this.getData();

    const indice = productos.findIndex((unProducto: any) => {
      if (unProducto.id === id) return true;
      else return false;
    });

    if (indice === -1) return null;

    return productos[indice];
  }

  async getAll() {
    const productos = await this.getData();

    return productos;
  }

}
