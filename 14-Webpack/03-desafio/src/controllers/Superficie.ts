class Superficie {
  circulo (radio:number) {
    return Math.PI * radio **2;
  }

  rectangulo (base: number, altura: number) {
    return base*altura;
  }

  cuadrado (lado: number) {
    return lado**2;
  }
}

export const SuperficieController = new Superficie();