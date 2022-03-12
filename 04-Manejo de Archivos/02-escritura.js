const fs = require('fs');

const data = `esto es el texto que quiero escribir en mi archivo\n`;
const pathNuevoArchivo = './01-output';

//Escritura sincronica
try {
  fs.writeFileSync(pathNuevoArchivo, data);
} catch (err) {
  console.log('Error Escritura Sincronica', err);
}

//Escritura Asincronica

fs.writeFile(pathNuevoArchivo, data, (err, salida) => {
  if (err) console.log('Error Escritura Asincronica', err.message);
  console.log('DONE');
});