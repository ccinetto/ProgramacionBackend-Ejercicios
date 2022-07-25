import request from 'request';

export const ejemploRequest2 = () => {
  const options = {
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};
