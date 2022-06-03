console.log(`Directorio actual de trabajo ===> ${process.cwd()}`);
console.log(`ID Del proceso actual ====> ${process.pid}`);
console.log(`Version de NodeJs corriendo ====> ${process.version}`);
console.log(`Titulo del proceso ====> ${process.title}`);
console.log(`Sistema Operativo ====> ${process.platform}`);
console.log(`Uso de memoria====> ${JSON.stringify(process.memoryUsage())}`);

/**Salir del proceso
 * Si no se pasa parametro termina correctamente "clean exit"
 * Si se le pasa parametro un numero con valor 0 termina correctamente "Clean exit"
 * Si se le pasa parametro un numero con valor distinto a 0 termina mal (app crashed);
 */
const codigoSalida = 0;
process.exit(codigoSalida);

console.log(
  'Esta linea no se va a ejecutar nunca porque llame a process.exit antes'
);