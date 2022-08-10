// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

app.handle("/", async (req) => {
  //console.log(req.url)
  let query = req.url.replace(/\//g, "");
  //console.log(query)
  const params = new URLSearchParams(query);
  //console.log(params)
  let frase = params.get("frase");

  if (frase) {
    let fraseDeco = decodeURIComponent(frase);

    const message = (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          {fraseDeco.split(' ').reverse().join(' ')}
        </body>
      </html>
    );

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8",
      }),
      body: ReactDOMServer.renderToString(message)
    });
  }
  else {
    const message = (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          Hola! mandame una frase
        </body>
      </html>
    );

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8",
      }),
      body: ReactDOMServer.renderToString(message)
    });
  }
});



app.listen({ port: 8080 });