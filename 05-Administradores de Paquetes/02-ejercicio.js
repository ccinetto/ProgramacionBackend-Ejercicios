const productos = [
  { id: 1, nombre: 'Escuadra', precio: 323.5 },
  { id: 2, nombre: 'Calculadora', precio: 234.1 },
  { id: 3, nombre: 'Globo Terraqueo', precio: 18.5 },
  { id: 4, nombre: 'Paleta Pintura', precio: 56.8 },
  { id: 5, nombre: 'Reloj', precio: 200 },
];

//Ejercicio 1 ==> Los nombres de los productos en un string separados por comas.
const arrayNombres = productos.map((unProducto) => unProducto.nombre);
let ejercicioA = arrayNombres.join(',');

//Ejercicio 2 => B) La suma total de todos los precios
let ejercicioB = 0;
productos.forEach((unProducto) => {
  ejercicioB += unProducto.precio;
});

//Ejercicio 3 => El precio promedio
let ejercicioC = ejercicioB / productos.length;

//Ejercicio 4 y 5 => El producto con menor y mayor precio
//ordenamos el array por precio y sabemos que el primero va a ser el menor valor y el ultimo el de mayor valor.
const logicaDeComparacion = (a, b) => {
  if (a.precio > b.precio) return 1;
  else if (a.precio < b.precio) return -1;
  else 0;
};

const arrayOrdernado = productos.sort(logicaDeComparacion);

const ejercicioD = arrayOrdernado[0];
const ejercicioE = arrayOrdernado[arrayOrdernado.length - 1];

const salida = {
  ejercicioA,
  ejercicioB,
  ejercicioC,
  ejercicioD,
  ejercicioE,
};

console.log(salida);
