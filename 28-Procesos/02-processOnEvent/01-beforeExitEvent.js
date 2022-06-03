/**
 * 01- BeforeExit
 * este evento se ejecuta cuando NodeJs no tiene mas tareas para ejecutar
 * IMPORTANTE ==> No se va a llamar a este evento si matamos el proceso con process.exit
 * Probar comentando y descomentando process.exit
 */

process.on('beforeExit', (code) => {
  console.log(`BeforeExit ==> El proceso termino con codigo ${code}`);
});

console.log('EJECUTANDO MI PROGRAMA');
process.exit(0);