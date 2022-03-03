const nombre = 'pepe';
let edad = 28;
let precio = 99.99;
const seriesFavoritas = ['Dark', 'Breaking Bad', 'How i met your mother'];

const peliculasFavoritas = [
  {
    nombre: 'Matrix',
    fechaEstreno: new Date('1999-06-10'),
    actores: [
      'Keanu Reeves',
      'Laurence Fishburne',
      'Carrie-Anne Moss',
      'Hugo Weaving',
    ],
  },
  {
    nombre: 'Batman: El caballero de la noche',
    fechaEstreno: new Date('2008-07-17'),
    actores: ['Christian Bale', 'Heath Ledger', 'Michael Caine', 'Gary Oldman'],
  },
  {
    nombre: 'El señor de los anillos: La comunidad del anillo',
    fechaEstreno: new Date('2001-12-19'),
    actores: ['Elijah Wood', 'Ian McKellen', 'Liv Tyler', 'Viggo Mortensen'],
  },
];

console.log('Nombre:', nombre);
console.log(`Edad: ${edad}`);
console.log(`Precio: ${precio}`);
console.log(seriesFavoritas);
console.log(peliculasFavoritas);

edad = edad + 1; //o edad +=1
console.log(edad);

seriesFavoritas.push('The Big Bang Theory');
console.log(seriesFavoritas);
