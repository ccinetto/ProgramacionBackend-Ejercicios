//EJ: deno run --allow-write eje8.desafio1.ts 6 7 22 43 1 26 88 8 65 123 6 86 99

//Levantamos los argumentos con Deno.args
//Los convertimos a numeros y filtramos los que no lo son
const numeros = Deno.args
  .map((num) => Number(num))
  .filter((anArg) => !isNaN(anArg));

console.log(numeros);
// los ordenamos
numeros.sort((a, b) => a - b);
//console.log(numeros)

//Obtenemos el minimo (al estar ordenamos sabemos que es el primero del array)
const minimo = numeros[0];

//Obtenemos el maximo (al estar ordenamos sabemos que es el ultimo del array)
const maximo = numeros[numeros.length - 1];

const promedio = (data: number[]) => {
  let suma = 0;
  data.forEach((num) => (suma += num));
  return suma / numeros.length;
};

//armamos nuestro string con un array de strings donde cada elemento va a ser una fila
const textos: string[] = [];
textos.push('******************************************');
textos.push(`Números: ${numeros}`);
textos.push(`Mínimo: ${minimo}`);
textos.push(`Máximo: ${maximo}`);
textos.push(`Promedio: ${promedio(numeros)}`);
textos.push('******************************************');

//-------------------
//salida a consola
import {
  red,
  green,
  yellow,
  bgWhite,
} from 'https://deno.land/std@0.99.0/fmt/colors.ts';
console.log(textos[0]);
console.log(textos[1]);
console.log(bgWhite(yellow(textos[2])));
console.log(bgWhite(red(textos[3])));
console.log(bgWhite(green(textos[4])));
console.log(textos[5]);

//-------------------
//escritura a archivo
const file = await Deno.open('./resultados.dat', { write: true, create: true });
const contentBytes = new TextEncoder().encode(textos.join('\n'));
await Deno.writeAll(file, contentBytes);
file.close();
