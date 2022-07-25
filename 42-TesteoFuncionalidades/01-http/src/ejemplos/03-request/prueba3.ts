import request from 'request';

export const ejemploRequest3 = () => {
  const options = {
    method: 'DELETE',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {},
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};
