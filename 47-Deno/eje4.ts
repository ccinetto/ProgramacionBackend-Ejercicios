// //Metodo 1 para escribir un archivo
// // Usando modulo Nativo de Deno

// const encoder = new TextEncoder();
// const data = encoder.encode('HOLAAAA');
// await Deno.writeFile('test.txt', data);
// console.log('Fin escritura')


//Metodo 2 para escribir un archivo
//Usando un modulo de Deno
//Notar que la funcion devuelve una promesa y por ende tenemos que usar el await
// Lo bueno es que no hace falta encerrarlo en una funcion async para usar el await

import { writeFileStr } from 'https://deno.land/std@0.55.0/fs/write_file_str.ts';
await writeFileStr('test.txt', 'Escribo usando liberia importada');
console.log("Fin escritura")

// //Deno Args (correr con argumentos para ver el contenido)
// console.log(Deno.args);
