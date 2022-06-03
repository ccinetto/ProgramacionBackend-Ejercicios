import { execFile } from 'child_process';
import path from 'path';

const scriptPath = path.resolve(__dirname, '../scripts/leer.sh');

execFile(scriptPath, (err, stdout, stderr) => {
  if (err) {
    console.log(`Error => ${err.message}`);
    return;
  }
  console.log(stderr);

  if (stderr) {
    console.log('STDERR');
    console.log(stderr);
    return;
  }

  console.log(stdout);
});

console.log(`PID PRINCIPAL ===> ${process.pid}`);
