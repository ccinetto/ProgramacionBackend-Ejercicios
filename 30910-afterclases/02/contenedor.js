const fs = require('fs');

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

  async save(miObjeto) {
    const productos = await this.getData();
    let id;

    if (productos.length === 0) id = 1;
    else id = productos[productos.length - 1].id + 1;

    const productoNuevo = {
      id: id,
      nombre: miObjeto.nombre,
      precio: miObjeto.precio,
    };

    productos.push(productoNuevo);

    await this.saveData(productos);
  }

  async getById(number) {
    const productos = await this.getData();

    const indice = productos.findIndex((unProducto) => {
      if (unProducto.id === number) return true;
      else return false;
    });

    if (indice === -1) return null;

    return productos[indice];
  }

  async getAll() {
    const productos = await this.getData();

    return productos;
  }

  async deleteById(number) {
    const productos = await this.getData();

    const nuevoArray = productos.filter(
      (unProducto) => unProducto.id != number
    );

    await this.saveData(nuevoArray);
  }

  async deleteAll() {
    const nuevo = [];

    await this.saveData(nuevo);
  }
}

const miContendor = new Contener('ejemplo.json');

module.exports = {
  Contenedor: miContendor,
};
