// //Declaracion basica de una funcion que recibe argumentos y retorna un valor
// function sumar(a, b) {
//   const c = a + b;
//   return c;
// }

// //Declaracion de una funcion anonima para un bucle forEach
// //ForEach es un metodo especial que se usa en arrays. recibe como argumento una funcion
// //ForEach va a ejecutar esa funcion pasada como argumento por cada elemento del array
// //Cuando la ejecute, va a pasarle como parametro el elemento de array
// const array = [1, 2, 3, 4, 5];

// array.forEach(function (aValue) {
//   console.log(aValue);
// });

// // Otro ejemplo de funcion anonima
// // SetTimeout recibe dos argumentos, el primero es una funcion y el segundo el tiempo en ms que va a tardar antes de
// // Ejecutar la funcion que le pasamos como primer argumento
// setTimeout(function () {
//   console.log(`Hola ${nombre}`);
// }, 5000);

// // Podemos crear una funcion anonina y asignarla a una variable, para reutilizar codigo o mejorar la legibilidad del codigo
// const duplicar = function (numero) {
//   return numero * 2;
// };

// const misNumeros = [10, 15, 6, 28, 9, 55, 4.9];

// const salida = misNumeros.map(duplicar);

// console.log(misNumeros);
// console.log(salida);
