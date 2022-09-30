const fs = require('fs');

const rutaArchivo = './fyh.txt'
const fecha = Date();

fs.promises
  .writeFile(rutaArchivo, fecha)
  .then(() => {
    console.log('Termine de escribir el archivo')
    return fs.promises.readFile(rutaArchivo, 'utf-8');
  })
  .then((data) => {
    console.log('Termine de leer el archivo')

    console.log(data);
  })
  .catch((err) => {
    console.log('Hubo error', err);
  });


const miFuncionAsync = async () => {
  try{
    await fs.promises.writeFile(rutaArchivo, fecha);
    console.log('Termine de escribir el archivo')

    const data = fs.promises.readFile(rutaArchivo, 'utf-8');

    console.log(data);
  } catch(err) {
    console.log('se rompio todo')
  }
}

miFuncionAsync();

// try {
//   const fecha = Date();

//   const rutaArchivo = './fyh.txt'

//   fs.writeFileSync(rutaArchivo, fecha);

//   const data = fs.readFileSync(rutaArchivo, 'utf-8');

//   console.log(data);
// } catch (err) {
//   console.log('ERROR', err);
// }




// fs.writeFile(rutaArchivo, fecha, (err, data) => {
//   if(err) {
//     console.log('Error escritura archivo');
//     throw new Error(err);
//   }

//   fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
//     if(err) {
//       console.log('Error lectura archivo');
//       throw new Error(err);
//     }

//     console.log(data);
//   })
// });