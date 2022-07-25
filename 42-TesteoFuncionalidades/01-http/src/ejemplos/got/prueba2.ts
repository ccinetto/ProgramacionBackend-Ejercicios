import got, { Options, GotReturn } from 'got';

export const ejemploGot2 = async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const options: Options = {
    prefixUrl: url,
    method: 'POST',
    json: data,
  };

  try {
    /** Opcion1 llamar a got y pasar en las options en metodo */
    const resp2: any = await got(options);

    console.log(resp2.body);

    // /**Opcion2, llamar al metodo directamente */
    const resp = await got.post(url, { json: data });
    // console.log(resp.body);
  } catch (err) {
    console.log(err);
  }
};
