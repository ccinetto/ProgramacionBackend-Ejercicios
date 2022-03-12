const fs = require('fs');

const path = './carpetainterna';

//Leer Carpeta sincronico
try {
  const data = fs.readdirSync(path);
  console.log(data);
} catch (err) {
  console.log('Error Crear carpeta Sincronica', err);
}

//Leer Carpeta Asincronica

fs.readdir(path, (err, salida) => {
  if (err) console.log('Error crear carpeta Asincronica', err);
  console.log(salida);
  console.log('DONE');
});
