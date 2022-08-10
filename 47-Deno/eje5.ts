import {
  red,
  blue,
  bgYellow,
  bgGreen,
  bold,
} from 'https://deno.land/std@0.99.0/fmt/colors.ts';

console.log(bgGreen('HOLA'));
console.log(bold('NEGRITA'));
console.log(red('EN ROJO'));
console.log(bgYellow(blue(bold('Bokita el mas grande'))));
