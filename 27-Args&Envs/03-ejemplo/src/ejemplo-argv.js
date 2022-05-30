/**
 * Probar con node dist/index + 4 5
 */

const args = process.argv.slice(2);
console.log(args);
let [op, n1, n2] = args;

let operando1 = parseFloat(n1);
let operando2 = parseFloat(n2);

const operaciones = {
  '+': operando1 + operando2,
  '-': operando1 - operando2,
  '*': operando1 * operando2,
  '/': operando1 / operando2,
};

const output = operaciones[op] ? operaciones[op] : 'wrong op parameter';

console.log(output);
