import yargs from 'yargs';

const multiplicacion = (argv: yargs.Arguments) => {
  console.log('Estoy ejecutando la multiplicacion');
  const operando1 = argv.op1 as number;
  const operando2 = argv.op2 as number;

  console.log(`El resultado es ${operando1 * operando2} `);
};

export const mulCommand: yargs.CommandModule = {
  command: 'mul',
  describe: 'operacion multiplicacion',
  builder: {
    op1: {
      describe: 'operando 1',
      demandOption: true,
    },
    op2: {
      describe: 'operando 2',
      demandOption: true,
    },
  },
  handler: multiplicacion,
};
