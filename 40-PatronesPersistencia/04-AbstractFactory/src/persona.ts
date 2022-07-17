/**
 * Esta es la clase base. Todas las que surgan de esta clase deberan tener definido las propiedades y metodos que definimos acas
 */

export interface Persona {
  nombre: string;
  edad: number;

  saludar(): string;
  saludarConPromesa(): Promise<string>;
}
