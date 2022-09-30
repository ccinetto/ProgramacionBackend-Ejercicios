const fs = require('fs');

const data = `Gol De Boca`;
const pathNuevoArchivo = './01-output';

//APPEND sincronica
try {
  fs.appendFileSync(pathNuevoArchivo, data);
} catch (err) {
  console.log('Error APPEND Sincronica', err);
}

//APPEND Asincronica

fs.appendFile(pathNuevoArchivo, data, (err, salida) => {
  if (err) console.log('Error APPEND Asincronica', err);

  console.log('DONE');
});
