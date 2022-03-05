const fs = require('fs');


// 1) Leermos el directorio actual donde estamos con la funcion readdir
// 2) Si encontramos dentro del directorio el archivo texto.txt lo leemos con la funcion readFile
// 3) Luego de leerlo, tomamos su data y la actualizamos con la funcion appendFile
fs.readdir(__dirname, (err, data) => {
  if (err) {
    console.log('Hubo un error para leer el directorio');
    console.log(err.message);
    return;
  }
  console.log(`\nARCHIVOS EXISTENTES =>`);
  console.log(data);
  if (data.includes('texto.txt')) {
    console.log('El archivo existe, vamos a leerlo');
    fs.readFile('texto.txt', (err, data) => {
      if (err) {
        console.log('Hubo un error para leer el archivo');
        console.log(err.message);
        return;
      }

      console.log(`\nDATA del archivo leido (Buffer) =>`);
      console.log(data);
      const info = data.toString();
      console.log(`\nDATA del archivo leido (String) =>`);
      console.log(info);

      console.log(`\nVamos a Actualizar el archivo`);

      fs.appendFile('texto.txt', 'HOLA\n', 'utf8', (err, data) => {
        if (err) {
          console.log('Hubo un error para escribir el archivo');
          console.log(err.message);
          return;
        }

        console.log(`\Archivo Actualizado. Fin del codigo`);
      });
    });
  } else {
    console.log('No existe el archivo. termino el codigo');
  }
});

console.log('EJECUTANDO LINEA 24');
