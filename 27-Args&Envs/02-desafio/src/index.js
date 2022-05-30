import minimist from 'minimist';

const optionalArgsObject = {
  alias: {
    //Para pasar un alias a los argumentos que nos envian
    p: 'puerto',
    m: 'modo',
    d: 'debug'
  },
  default: {
    //Si no nos envian el argumento, se setea por default
    d: false,
    m: 'prod',
    p: 0
  },
};

const args = minimist(process.argv, optionalArgsObject);

console.log('TRANSFORMACION ARGV CON MINIMIST')
console.log(args);


const objetoFinal = {
  otros: args['_'].slice(2),
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
}

console.log('FINAL')
console.log(objetoFinal);
