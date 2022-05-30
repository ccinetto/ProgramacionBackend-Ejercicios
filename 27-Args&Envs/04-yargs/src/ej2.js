/**
 * Siempre que se haga un cambio, ejecutar primero npm run build
 * Luego podemos ejecutar estos ejemplos:
 * 
 * 
 * node dist/ej2.js --help
 * 
 * node dist/ej2.js add --help 
 * 
 * node dist/ej2.js add --version 
 * 
 * node dist/ej2.js add --op1=2 --op2=2
 * 
 * node dist/ej2.js add --op1 2 --op2 2
 */

import yargs from 'yargs';

const sumar = (argv) => {
  console.log('Estoy ejecutando la suma');
  const operando1 = argv.op1;
  const operando2 = argv.op2;

  console.log(`El resultado es ${operando1 + operando2} `);
};

const addCommand = {
  command: 'add',
  describe: 'operacion suma',
  builder: {
    op1: {
      describe: 'operando 1 para hacer la suma',
      demandOption: true,
      type: 'number',
    },
    op2: {
      describe: 'operando 2 para hacer la suma',
      demandOption: true,
      type: 'number',
    },
  },
  handler: sumar,
};

yargs.version('26.06.2011');
yargs.command(addCommand);
yargs.parse();