const fs = require('fs');

const pathArchivoBorrar = './01-output';

// //Borrado sincronico
// try {
//   fs.unlinkSync(pathArchivoBorrar);
// } catch (err) {
//   console.log('Error Borrado Sincronica', err);
// }

// //Escritura Asincronica

fs.unlink(pathArchivoBorrar, (err, salida) => {
  if (err) {
    console.log('Error Borrado Asincronica', err);
  }

  console.log('DONE');
});
