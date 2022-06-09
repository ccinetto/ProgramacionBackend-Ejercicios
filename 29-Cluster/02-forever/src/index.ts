import Server from './services/server';
import minimist from 'minimist';

const optionalArgsObject = {
  alias: {
    //Para pasar un alias a los argumentos que nos envian
    p: 'puerto',
  },
  default: {
    //Si no nos envian el argumento, se setea por default
    puerto: '8080',
  },
};

const args = minimist(process.argv, optionalArgsObject);

const PORT = args.puerto;

Server.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);
