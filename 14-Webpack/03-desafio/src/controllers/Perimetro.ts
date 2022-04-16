class Perimetro {
  circulo (radio:number) {
    return Math.PI * radio * 2;
  }

  rectangulo (base: number, altura: number) {
    return 2* (base +altura);
  }

  cuadrado (lado: number) {
    return 4*lado;
  }
}

export const PerimetroController = new Perimetro();