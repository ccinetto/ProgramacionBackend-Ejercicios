// 1)Ejecutar NPM RUN BUILD PARA GENERAR CARPETA DIST
// 2) ejecutar node dist/index (o npm start) y ver salida
// 3) ejecutar node dist/index arg1 arg2 arg3 (o npm start:with:args) y ver salida

const argumentos = process.argv;

console.log('ARGUMENTOS RECIBIDOS');

console.log(argumentos);
