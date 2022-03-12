const fs = require('fs');

const path = './texto.txt';               //El ./ indica que estas en el directorio actual

//Leer Estadisticas de un archivo en forma sincronica
try {
  const stats = fs.statSync(path);
  console.log(stats);

  console.log(stats.isFile());
  console.log(stats.isDirectory());
} catch (err) {
  console.log('Error Lectura estadisticas sincronica', err);
}

// // Leer Estadisticas de un archivo en forma asincronica

// fs.stat(path, (err, salida) => {
//   if (err) console.log('Error crear carpeta Asincronica', err);
//   console.log(salida);
//   console.log('DONE');
// });
