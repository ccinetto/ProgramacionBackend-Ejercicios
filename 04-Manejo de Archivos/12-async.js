const fs = require('fs/promises');

//DESAFIO USANDO ASYNC//AWAIT
const main = async () => {
  const pathArchivo = './package.json';
  const pathDestino = './info.txt';

  const info = {
    contenidoStr: undefined,
    contenidoObj: undefined,
    size: undefined,
  };

  try {
    const data = await fs.readFile(pathArchivo, 'utf-8');
    const stats = await fs.stat(pathArchivo);
    info.contenidoStr = data;
    info.contenidoObj = JSON.parse(data);
    info.size = stats.size;

    const infoStringifycada = JSON.stringify(info, null, '\t');

    await fs.writeFile(pathDestino, infoStringifycada);

    console.log('FIN FUNCION MAIN');
  } catch (err) {
    console.log('ERROR DENTRO DE LA FUNCION MAIN ==>', err);
    throw new Error(err);
  }
};

console.log('LINEA INICIAL');
main()
  .then(() => {
    console.log('PROCESO SALIDA DE LA FUNCION MAIN');
  })
  .catch((err) => {
    console.log('ATAJE EL ERROR AL LLAMAR AL MAIN', err);
  })
  .finally(() => {
    console.log('ESTO SE EJECUTA SI O SI');
  });
