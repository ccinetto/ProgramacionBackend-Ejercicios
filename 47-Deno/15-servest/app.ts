//https://servestjs.org/

import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

app.get("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "hello deno!",
  });
});


app.post("/post", async (req) => {
  const body = await req.json();
  console.log(body);

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "hello deno!",
  });
  // handling...
});

app.listen({ port: 8899 });
