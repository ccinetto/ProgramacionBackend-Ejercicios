class Persona {
  nombre;
  edad;

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static esPersona(posiblePersona) {
    if (
      posiblePersona.nombre &&
      typeof posiblePersona.nombre === 'string' &&
      posiblePersona.edad &&
      typeof posiblePersona.edad === 'number' &&
      posiblePersona.edad > 0
    )
      return true;
    else return false;
  }

  saludar() {
    console.log(`Hola! me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona('juan carlos', 28);
const persona2 = new Persona('pepe', 15);

persona1.saludar();
persona2.saludar();

const data = {
  nombre: 'juan',
  edad: 15,
};

console.log(Persona.esPersona(data));
