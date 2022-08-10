// //Escritura archivos Sin usar modulos
const content = new TextEncoder();
const dato = 'ESTO VOY A ESCRIBIR';

await Deno.writeFile('test.txt', content.encode(dato), { append: true });

//Escritura con modulos

import { writeFileStr } from 'https://deno.land/std@0.55.0/fs/write_file_str.ts';

await writeFileStr('test.txt', 'Mi contenido nuevo');
