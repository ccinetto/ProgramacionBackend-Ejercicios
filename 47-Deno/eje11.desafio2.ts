/** ES Modules */
import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts';

const PORT = 8080;

/** Create Server */
const server = serve({
  port: PORT,
});

console.log('http://localhost:' + PORT);
for await (const req of server) {
  //Obtenemos la URL de la request
  console.log('URL ==>', req.url, '\n\n');

  //sacamos la query de la URL
  let query = req.url.replace(/\//g, '');
  console.log('QUERY ===> ', query, '\n\n');

  //Sacamos el params de la query
  const params = new URLSearchParams(query);
  console.log('PARAMS ===>', params, '\n\n');

  //Obtenemos la frase de los params
  let frase = params.get('frase');

  if (frase) {
    let fraseDeco = decodeURIComponent(frase);
    //console.log(frase)
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html; charset=utf-8',
      }),
      body: fraseDeco.split(' ').reverse().join(' '),
    });
  } else {
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html; charset=utf-8',
      }),
      body: 'Hello!, please send me a text',
    });
  }
}
