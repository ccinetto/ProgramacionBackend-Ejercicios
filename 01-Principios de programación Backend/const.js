// //Esto va a dar error porque no podemos reasignar el valor de una variable declarada como const
// const nombre = 'pepe';
// nombre = 'juan';

//Esto va a funcionar, porque no estamos reasignando su valor sino que estamos modificando su valor
const misNumeros = [1, 2, 3, 4, 5];
console.log(misNumeros);
misNumeros.push(6);
console.log(misNumeros);

const obj1 = {
  nombre: 'Franco',
  appelido: 'Soldano',
  goles: 2500,
  equipos: ['Real Madrid', 'Juventus', 'Boca Juniors'],
  jugadorSelecion: true,
};
