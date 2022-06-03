/**
 * 03-uncaughtException
 * Este evento se dispara cuando hay un error que no fue atajado por el programa
 * Recibe el error que no se atajo
 * Si se agregó un listener a esta excepción, no se producirá la acción por defecto
 * (imprimir una traza del stack y salir)
 * Probar comentando el process.on("UncaughtException y ver la salida")
 */

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n\n`);
  process.exit(1);
});

const miFunc2 = () => {
  throw new Error('Mensaje Personalizado del error');
};

const miFunc1 = () => miFunc2();

miFunc1();
