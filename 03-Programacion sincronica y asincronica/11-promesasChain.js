const fs = require('fs/promises');

fs.readdir(__dirname)
  .then((archivos) => {
    console.log(archivos);
    if (archivos.includes('texto.txt')) {
      console.log('Existe el archivo. Vamos a leerlo');
      return fs.readFile('tto.txt');
    } else {
      console.log('No Existe el archivo. Tiro error');
      throw new Error('No existe el archivo');
    }
  })
  .then((data) => {
    const miData = data.toString();
    console.log(`DATA File Actual => ${miData}`);
    return fs.appendFile('texto.txt', 'HOLA\n', 'utf8');
  })
  .then((resp) => {
    console.log(resp);
    return fs.readFile('texto.txt');
  })
  .then((data) => {
    const miData = data.toString();
    console.log(`DATA File Nueva => ${miData}`);
  })
  .catch((err) => {
    console.log('Ataje el error');
    console.log(err);
  })
  .finally(() => {
    console.log('ESTO SE EJECUTA SI O SI');
  });

console.log('ULTIMA LINEA DE CODIGO');
