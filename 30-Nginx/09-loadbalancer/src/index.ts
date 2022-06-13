import Server from './services/server';
import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config();

const argumentos = minimist(process.argv.slice(2));
export const PORT = argumentos.puerto || 8080;

console.log(argumentos);
Server.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);
