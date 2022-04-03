const { v4: uuidv4 } = require('uuid');

let personas = [];

const getAll = () => {
  return personas;
};

const save = (data) => {
  const nuevaPersona = {
    id: uuidv4(),
    nombre: data.nombre,
    apellido: data.apellido,
    edad: data.edad,
  };
  personas.push(nuevaPersona);
};

module.exports = {
    getAll,
    save,
}
