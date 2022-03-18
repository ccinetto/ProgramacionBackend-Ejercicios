const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class Usuario {
  //SOlo usar la version sincronica en el constructor
  constructor(nombre, apellido) {
    this.archivo = `./${nombre}-${apellido}.json`;

    const fileExists = fs.existsSync(this.archivo);

    if (fileExists) {
      const data = this.leer();
      console.log(`Archvio ${this.archivo} existe, inicializo con el archivo`);
      this.nombre = data.nombre;
      this.apellido = data.pellido;
      this.libros = data.libros;
      this.mascotas = data.mascotas;
    } else {
      console.log('Archivo no existe. creando uno nuevo');
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
      this.archivo = `./${nombre}-${apellido}.json`;

      const data = {
        nombre: this.nombre,
        apellido: this.apellido,
        libros: this.libros,
        mascotas: this.mascotas,
        archivo: this.archivo,
      };

      this.escribir(data)
    }
  }

  leer() {
    const data = fs.readFileSync(this.archivo, 'utf-8');
    return JSON.parse(data);
  }

  leerPromise() {
    return new Promise((resolve, reject) => {
      fs.promises
        .readFile(this.archivo, 'utf-8')
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          console.log("HUBO UN ERROR CON LA PROMESA", err.message);
          reject(err);
        });
    });
  }

  async leerAsync (){
    const data = await fs.promises.readFile(this.archivo, 'utf-8');
    return JSON.parse(data);
  }

  async escribirAsync(data){
    return await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'))
  }

  escribir(data) {
    fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
  }

  async getFullName() {
    const data = await this.leerAsync();
    return `${data.nombre} ${data.apellido}`;
  }

  countMascotas() {
    const data = this.leer();
    return data.mascotas.length;
  }

  showMascotas() {
    const data = this.leer();
    return data.mascotas;
  }

  showLibros() {
    const data = this.leer();
    return data.libros;
  }

  getBookNames() {
    const data = this.leer();
    return data.libros.map((unLibro) => unLibro.nombre);
  }

  addMascota(mascota) {
    const pepito = this.leer();

    pepito.mascotas.push(mascota);
    this.escribir(pepito);
  }

  addLibro(miNuevoLibro) {
    const p = {
      id: uuidv4(),
      nombre: miNuevoLibro.nombre,
      autor: miNuevoLibro.autor,
    };

    this.libros.push(p);
  }
}


