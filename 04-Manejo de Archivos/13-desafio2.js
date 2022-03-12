const fs = require('fs/promises');

const filePath = './info.txt';
const fileDestination = './nuevaInfo.txt';

fs.readFile(filePath)
  .then((fileData) => {
    const objectInfo = JSON.parse(fileData);
    console.log(objectInfo);

    const dataString = JSON.parse(objectInfo.contenidoStr);
    dataString.author = 'CoderHouse';

    objectInfo.contenidoObj.author = 'CoderHouse';

    const newInfo = {
      contenidoStr: JSON.stringify(dataString),
      contenidoObj: objectInfo.contenidoObj,
      size: objectInfo.size,
    };

    return fs.writeFile(fileDestination, JSON.stringify(newInfo, null, '\t'));
  })
  .then(() => {
    console.log('FIN PROCESO');
  })
  .catch((err) => {
    console.log('ERROR ===>>', err);
  });
