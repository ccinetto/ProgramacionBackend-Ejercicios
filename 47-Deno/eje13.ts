//deno run --allow-write --unstable --allow-read eje13.ts

import { copy } from 'https://deno.land/std@0.97.0/fs/copy.ts';

await copy('resultados.dat', 'test2.txt');

console.log('DONE');
