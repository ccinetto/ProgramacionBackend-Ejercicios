//Levantamos los argumentos con process.argv y sacamos los primeros 2 que vienen por defecto

import { getMax, getMin, promedio } from './utils';

process.on('exit', (code: number) => {
  console.log(`Program exit with code ${code}`);
});

const argumentos = process.argv.slice(2);

//Si no recibo argumentos muestro error y termino
if (!argumentos.length) {
  const error = {
    descripcion: 'entrada vacia',
  };
  console.log(error);
  process.exit(-4);
}

//convertimos los argumentos a numeros y filtramos los que no lo son
const numeros = argumentos
  .map((num) => Number(num))
  .filter((anArg) => !isNaN(anArg));

if (numeros.length !== argumentos.length) {
  //hay argumentos que no son numericos
  const error = {
    descripcion: 'error de tipo',
    entrada: argumentos,
    isNan: argumentos.map((anArg) => isNaN(Number(anArg))),
  };
  console.log(error);
  process.exit(-5);
}

const datos = {
  numeros: argumentos,
  prom: promedio(numeros),
  maximo: getMax(numeros),
  minimo: getMin(numeros),
  ejecutable: process.execPath,
  pid: process.pid,
};

console.log(datos);
process.exit(0);
