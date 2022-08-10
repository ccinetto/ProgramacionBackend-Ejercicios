import {
  parse,
  dayOfYear,
  difference,
} from 'https://deno.land/std@0.100.0/datetime/mod.ts'; // Url REMOTA!

console.log(parse('20-01-2019', 'dd-MM-yyyy')); // output : new Date(2019, 0, 20)
console.log(parse('2019-01-20', 'yyyy-MM-dd')); // output : new Date(2019, 0, 20)
console.log(parse('20.01.2019', 'dd.MM.yyyy')); // output : new Date(2019, 0, 20)
console.log(parse('01-20-2019 16:34', 'MM-dd-yyyy HH:mm')); // output : new Date(2019, 0, 20, 16, 34)
console.log(parse('01-20-2019 04:34 PM', 'MM-dd-yyyy hh:mm a')); // output : new Date(2019, 0, 20, 16, 34)
console.log(parse('16:34 01-20-2019', 'HH:mm MM-dd-yyyy')); // output : new Date(2019, 0, 20, 16, 34)
console.log(parse('01-20-2019 16:34:23.123', 'MM-dd-yyyy HH:mm:ss.SSS')); // output : new Date(2019, 0, 20, 16, 34, 23, 123)

const myDate = parse('20-11-2019', 'dd-MM-yyyy');
const myDate2 = parse('20-05-2019', 'dd-MM-yyyy');

//Obtenemos el dia del año de la fecha que ingresamos
console.log(dayOfYear(myDate));

//Calcula la diferencia de tiempo entre 2 fechas (podemos elegir la unidad si queremos)
console.log(difference(myDate2, myDate));

//Podemos sacar el dia/mes/año como con date
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
console.log(myDate.getFullYear());


//Docu de la libreria en https://deno.land/std@0.100.0/datetime