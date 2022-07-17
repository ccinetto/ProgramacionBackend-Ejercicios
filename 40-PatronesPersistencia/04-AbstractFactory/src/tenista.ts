import { Persona } from './persona';

/**
 * Comentarv alguno de los metodos o alguna de las propiedades que definimos en personas.
 * Typescript nos va a decir que necesitamos definir esas propiedades o metodos obligatoriamente
 *
 */
export class Tenista implements Persona {
  nombre;
  edad;
  titulos;
  saludo: string;

  constructor(nombre: string, edad: number, titulos: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.titulos = titulos;
    this.saludo = `Hola soy ${this.nombre}, tengo ${this.edad} años. Soy tenista y tengo ${this.titulos} titulos`;
  }

  saludar() {
    return this.saludo;
  }

  saludarConPromesa() {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve(this.saludo), 5000);
    });
  }
}