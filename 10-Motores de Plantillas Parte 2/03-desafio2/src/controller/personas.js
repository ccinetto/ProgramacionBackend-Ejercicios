const { v4: uuidv4 } = require('uuid');

class Personas {
  constructor() {
    this.personas = [
      { id: uuidv4(), nombre: 'Martin', apellido: "Palermo", edad: 22 },
      { id: uuidv4(), nombre: 'Juan Roman', apellido: "Riquelme", edad: 30 }
    ];
  }

  getAll() {
    return this.personas;
  }

  save(data) {
    const nuevaPersona = {
      id: uuidv4(),
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad,
    };
    this.personas.push(nuevaPersona);
  }
}

const personasController = new Personas();

module.exports = personasController
