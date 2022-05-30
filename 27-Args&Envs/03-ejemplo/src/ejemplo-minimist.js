/**
 * Probar con node dist/index.js --op=* --n1=4 --n2=5
 */

import minimist from 'minimist';

const args = minimist(process.argv);
console.log('\n\nARGUMENTOS MINIMIST');
console.log(args);
let { op, n1, n2 } = args;

const operaciones = {
  '+': n1 + n2,
  '-': n1 - n2,
  '*': n1 * n2,
  '/': n1 / n2,
};

const output = operaciones[op] || 'wrong op parameter';

console.log('\n\nRESULTADO');
console.log(output);
