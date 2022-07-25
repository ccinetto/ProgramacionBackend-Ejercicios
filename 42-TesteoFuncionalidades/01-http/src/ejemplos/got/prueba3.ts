import got from 'got';

export const ejemploGot3 = async () => {
  try {
    const resp = await got.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log(resp.body);
  } catch (err) {
    console.log(err);
  }
};
