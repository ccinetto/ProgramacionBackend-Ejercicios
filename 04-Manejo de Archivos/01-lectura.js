const fs = require('fs');
const path = require('path');

//NOTA: 4 formas distintas de referenciar el mismo archivo
console.log(__dirname);

//3 formas distintos de referir un archivo en el mismo directorio
const pathArchivoOpcion1 = 'texto.txt';
const pathArchivoOpcion2 = './texto.txt';               //El ./ indica que estas en el directorio actual
const pathArchivoOpcion3 = `${__dirname}/texto.txt`;

//Forma para referenciar un archivo que esta fuera del directorio donde estamos trabajando
// /../ significa que subimos un nivel superior de donde estamos
const pathArchivo4 = path.resolve(__dirname, './../03-Programacion sincronica y asincronica', 'texto.txt');


const ubicacionArchivo = pathArchivoOpcion2

// //Lectura sincronica
// try {
//   const data = fs.readFileSync(ubicacionArchivo, 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.log('Error lectura Sincronica');
//   console.log(err.message)
// }

//Lectura asincronica

fs.readFile(ubicacionArchivo, 'utf-8', (error, dataAsync) => {
  if (error) return console.log('Error lectura Asincronica', error.message);

  console.log(dataAsync.toString());
});
