import Config from './config';
import minimist from 'minimist';
import cluster from 'cluster';
import os from 'os';
import Server from './services/server';

const argumentos = minimist(process.argv.slice(2));

const clusterMode = argumentos.cluster;
const numCPUs = os.cpus().length;

/* --------------------------------------------------------------------------- */
/* MASTER */
/**
 * isMaster vs isPrimary
 * https://stackoverflow.com/questions/68978929/why-is-nodejs-cluster-module-not-working
 */
if (clusterMode && cluster.isMaster) {
  console.log('Ejecutando modo cluster');
  console.log(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
  /* --------------------------------------------------------------------------- */
  /* WORKERS */
  Server.listen(Config.PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${Config.PORT} - PID WORKER ${process.pid}`
    )
  );
}
