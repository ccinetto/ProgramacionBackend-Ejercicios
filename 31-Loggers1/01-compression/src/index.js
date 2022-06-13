import serverCompress from './services/serverCompress';
import ServerNormal from './services/serverNormal';

serverCompress.listen(3000, () =>
  console.log(`Servidor Compress escuchando en puerto 3000`)
);

ServerNormal.listen(4000, () =>
  console.log(`Servidor Normal escuchando en puerto 4000`)
);
