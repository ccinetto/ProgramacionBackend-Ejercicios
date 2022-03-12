const fs = require('fs');

const pathArchivo = './package.json';
const pathDestino = './info.txt';

//leo el archivo. su contenido va a estar en dataFile
fs.readFile(pathArchivo, 'utf-8', (errRead, dataFile) => {
  if (errRead) console.log('Error Lectura', err);

  //Leo estadisticas del archivo. Su contenido estara en stats
  fs.stat(pathArchivo, (errStat, stats) => {
    if (errStat) console.log('Error Lectura Estadisticas', err);

    const info = {
      contenidoStr: dataFile,
      contenidoObj: JSON.parse(dataFile),
      size: stats.size,
    };

    console.log(info);

    const infoStringifycada = JSON.stringify(info, null, '\t');

    fs.writeFile(pathDestino, infoStringifycada, (err) => {
      console.log('Fin proceso');
    });
  });
});
