const fs = require('fs/promises');

const miFuncionAsync = async () => {
  try {
    const directorio = await fs.readdir(__dirname);

    if (directorio.includes('texto.txt')) {
      let archivo = await fs.readFile('tto.txt');

      let miData = archivo.toString();
      console.log(`DATA File Actual => ${miData}`);

      await fs.appendFile('texto.txt', 'HOLA\n', 'utf8');

      archivo = await fs.readFile('texto.txt');

      miData = archivo.toString();
      console.log(`DATA File Nueva => ${miData}`);
    } else {
      console.log('No Existe el archivo. Termino programa');
      return;
    }
  } catch (err) {
    console.log('HUBO UN EROR');
    console.log(err);
  }
};

console.log('INICIO');
miFuncionAsync().then(() => {
  console.log('FIN');
});
