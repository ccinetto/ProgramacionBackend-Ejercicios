import yargs from 'yargs';

const sumar = (argv: yargs.Arguments) => {
  console.log('Estoy ejecutando la suma');
  const operando1 = argv.op1 as number;
  const operando2 = argv.op2 as number;

  console.log(`El resultado es ${operando1 + operando2} `);
};

export const addCommand: yargs.CommandModule = {
  command: 'add',
  describe: 'operacion suma',
  builder: {
    op1: {
      describe: 'operando 1',
      demandOption: true,
      type: 'number',
    },
    op2: {
      describe: 'operando 2',
      demandOption: true,
      type: 'number',
    },
  },
  handler: sumar,
};
