import { exec } from 'child_process';

// https://www.section.io/engineering-education/nodejs-child-processes/

//listar los archivos de mi directorio actual
const comando1 = 'ls -lh';

//listar todos los archivos de mi OS
//Como la salida es muy grande, rompe. no se puede usar este metodo
const comando2 = 'find /';

//ejecuto script de nodejs
const comando3 = 'node ../04-desafio/dist/index 1 33 43 56 4';

exec(comando3, (err, stdout, stderr) => {
  if (err) {
    console.log(`Error => ${err.message}`);
    return;
  }

  if (stderr) {
    console.log('STDERR');
    console.log(stderr);
    return;
  }

  console.log(stdout);
});

console.log(`PID PRINCIPAL ===> ${process.pid}`);
