const fs = require('fs');

const data = `Gol de boca\n`;
const pathNuevoArchivo = './01-output';

//Escritura sincronica
try {
  fs.writeFileSync(pathNuevoArchivo, data);
} catch (err) {
  console.log('Error Escritura Sincronica', err);
}

// //Escritura Asincronica

// fs.writeFile(pathNuevoArchivo, data, (err, salida) => {
//   if (err) {
//     console.log('Error Escritura Asincronica', err.message);
//     throw new Error(err);
//   }
//   console.log('DONE');
// });