// // A) Ejemplo de arroy function

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(2,4));

// // B) Ejemplo Arrow function de una funcion que recibe un parametro

// const saludar = nombre => {
//   console.log(`Hola ${nombre}`);
// };

// saludar('pepe')

// // C) Ejemplo de Arroy function de solo una linea que retorna un resultadp

// const duplicar = valor => valor * 2;
// console.log(duplicar(177))


// // D) Ejemplo arrow function de una sola linea que retorna un objeto

// const multiplicar = (valor) => ({
//     duplicado: valor*2,
//     triplicado: valor*3,
//     cuadruplicado: valor*4,
//     quintuplicado: valor*5
// })

// console.log(multiplicar(5))



// const array = [1, 2, 3, 4, 5];

// array.forEach((aValue) => {
//   console.log(aValue * 2);
// });

// const suma2 = (a, b) => a + b;

// const suma3 = (a, b) => {
//   return a + b;
// };
// console.log(suma2(1, 2));

// const square = (a) => a * a;

// console.log(square(3));

// const pepe = (a) => ({ resultado: a * 2 });

// console.log(pepe(2));
// // CASO A
// var edad = 10;
// function Person() {
//   this.edad = 42;

//   setTimeout(() => {
//     console.log('THIS ===> ', this);
//     console.log(this.edad);
//   }, 10);
// }

// Person();

// // CASO B
// var edad = 10;
// function Person() {
//   'use strict';
//   this.edad = 42;

//   setTimeout(function () {
//     console.log('THIS ===> ', this);
//     console.log(this.edad);
//   }, 10);
// }

// var p = new Person();
