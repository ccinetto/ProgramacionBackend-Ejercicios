const moment = require('moment');


const miCumple = moment('07-11-1993', 'DD-MM-YYYY');
const now = moment();

console.log('Hoy es', now.format('DD-MM-YYYY ===> dddd'));
console.log('Naci el', miCumple.format('DD-MM-YYYY'));

const diferenciaDias = now.diff(miCumple, 'days');
const diferenciaAnios = now.diff(miCumple, 'years');

console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} años`);
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} dias`);
