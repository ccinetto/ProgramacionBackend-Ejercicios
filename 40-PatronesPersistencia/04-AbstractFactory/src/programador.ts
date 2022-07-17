import { Persona } from './persona';

export class Programador implements Persona {
  nombre;
  edad;
  lenguage;
  experiencia;

  constructor(
    nombre: string,
    edad: number,
    experiencia: number,
    lenguage: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.lenguage = lenguage;
    this.experiencia = experiencia;
  }

  saludar() {
    const saludo = `Hola soy ${this.nombre}, tengo ${this.edad} años. Soy ${Programador.name} en ${this.lenguage} y tengo ${this.experiencia} años de experiencia`;

    return '2';
  }

  saludarConPromesa() {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve('aguante typescript'), 5000);
    });
  }
}