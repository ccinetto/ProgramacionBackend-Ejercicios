import axios from 'axios';

const data = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

const url = 'https://jsonplaceholder.typicode.com/posts';

const funcionAsync = async () => {
  try {
    const resp = await axios.post(url, data);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

export const axiosEjemplo2 = () => funcionAsync();
