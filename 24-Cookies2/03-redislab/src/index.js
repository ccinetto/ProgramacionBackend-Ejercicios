import config from './config';
import Server from './services/server';

const PORT = config.PORT;
Server.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
