const fs = require('fs');

const pathArchivo = './package.json';
const pathDestino = './info.txt';

try {
  const data = fs.readFileSync(pathArchivo, 'utf-8');
  const stats = fs.statSync(pathArchivo);

  const info = {
    contenidoStr: dataFile,
    contenidoObj: JSON.parse(dataFile),
    size: stats.size,
  };

  const infoStringifycada = JSON.stringify(info, null, '\t');

  fs.writeFileSync(pathDestino, infoStringifycada);
  
} catch (err) {
  console.log(err);
}
