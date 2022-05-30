import minimist from 'minimist';

// /** Opcion1 : Solo pasar process.argv*/

// const args = minimist(process.argv);

/** Opcion2 : Pasar alias y default values */
const optionalArgsObject = {
  alias: {
    //Para pasar un alias a los argumentos que nos envian
    h: 'help',
    v: 'version',
    x: 'mialiasPersonalizado',
    m: 'message',
  },
  default: {
    //Si no nos envian el argumento, se setea por default
    port: '6100',
    cluster: false,
  },
};

const args = minimist(process.argv, optionalArgsObject);

console.log('TRANSFORMACION ARGV CON MINIMIST')
console.log(args);
