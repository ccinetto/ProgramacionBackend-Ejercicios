/**
 * 02- Exit
 * este evento se ejecuta cuando el proceso muere
 * Ya sea porque termino bien o porque se disparo un error que no se atajo
 * o porque se llamo a process.exit
 * Probar comentando lineas 25, 26 y 27
 * Probar descomentando de a una linea
 */

process.on('exit', (code) => {
  console.log(`Exit ==> El proceso termino con codigo ${code}\n\n`);
});

console.log("EJECUTANDO MI PROGRAMA")
// throw new Error('hola');
// process.exit(1);
// process.exit(0);