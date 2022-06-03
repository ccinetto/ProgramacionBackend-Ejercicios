//Obtenemos el maximo (al estar ordenamos sabemos que es el ultimo del array)
export const getMax = (numeros: number[]): number => {
  const data = numeros.sort();
  return data[numeros.length - 1];
};

//Obtenemos el minimo (al estar ordenamos sabemos que es el primero del array)
export const getMin = (numeros: number[]): number => {
  const data = numeros.sort();
  return data[0];
};

export const promedio = (numeros: number[]) => {
  let suma = 0;
  numeros.forEach((num) => (suma += num));
  return suma / numeros.length;
};
