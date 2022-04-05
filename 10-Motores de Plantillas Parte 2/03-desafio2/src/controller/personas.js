const { v4: uuidv4 } = require('uuid');

class Personas {
  constructor() {
    this.personas = [];
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
