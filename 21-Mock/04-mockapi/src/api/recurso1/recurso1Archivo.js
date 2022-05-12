import faker from 'faker';
import fs from 'fs';

//Esto solo va a funcionar si el archivo ya existe
class Contener {
  constructor(nombreArchivo) {
    this.archivo = nombreArchivo;
  }

  async getData() {
    const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
    return JSON.parse(data);
  }

  async saveData(data) {
    await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
  }

  async post() {
    const productos = await this.getData();

    const productoNuevo = {
      id: productos.length + 1,
      nombre: faker.name.firstName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      image: faker.image.avatar(),
   }

    productos.push(productoNuevo);

    await this.saveData(productos);
  }

  async findIndex(number) {
    const productos = await this.getData();

    const indice = productos.findIndex((unProducto) => {
      if (unProducto.id === number) return true;
      else return false;
    });

    if (indice === -1) return null;

    return indice;
  }

  async get(id) {
    const productos = await this.getData();

    if (id)
      return productos.filter(aResource => aResource.id == id)

    return productos;
  }

  async delete(number) {
    const productos = await this.getData();

    const nuevoArray = productos.filter(
      (unProducto) => unProducto.id != number
    );

    await this.saveData(nuevoArray);
  }


  async put(id, data) {
    const productos = await this.getData();
    const index = await this.findIndex(id);
    const recursoViejo = productos[index];
    const recursoNuevo = { id, ...data };

    const recursoActualizado = { ...recursoViejo, ...recursoNuevo };
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#syntax
    productos.splice(index, 1, recursoActualizado);
    await this.saveData(productos);
 }

}

export const Recurso1APIArchivo = new Contener('ejemplo.json');
