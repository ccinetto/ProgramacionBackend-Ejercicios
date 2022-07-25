import request from 'request';

export const ejemploRequest1 = () => {
  const options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/2',
    headers: {},
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};
