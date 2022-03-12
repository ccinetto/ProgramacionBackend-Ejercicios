const fs = require('fs/promises');

//DESAFIO USANDO PROMISES

const pathArchivo = './package.json';
const pathDestino = './info.txt';

const info = {
  contenidoStr: undefined,
  contenidoObj: undefined,
  size: undefined,
};

fs.readFile(pathArchivo, 'utf-8')
  .then((fileData) => {
    info.contenidoStr = fileData;
    info.contenidoObj = JSON.parse(fileData);
    return fs.stat(pathArchivo);
  })
  .then((stats) => {
    info.size = stats.size;

    const infoStringifycada = JSON.stringify(info, null, '\t');

    return fs.writeFile(pathDestino, infoStringifycada);
  })
  .then(() => {
    console.log('FIN PROCESO');
  })
  .catch((err) => {
    console.log('ERROR', err);
  });
