import { spawn } from 'child_process';

const child = spawn('find', ['.']);

//Commands can return data in either the stdout stream or the stderr stream, so you added listeners for both.
child.stdout.on('data', (data) => {
  console.log('RECIBI DATA STDOUT');
  console.log(`stdout:\n\n\n${data}`);
});

child.stderr.on('data', (data) => {
  console.log('RECIBI DATA STDERR');
  // console.error(`stderr: ${data}`);
});

//the error event if the command fails to execute or is interrupted
child.on('error', (error) => {
  console.error(`error: ${error.message}`);
});

//the close event for when the command has finished execution, thus closing the stream.
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
