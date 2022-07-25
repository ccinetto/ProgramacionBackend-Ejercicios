import https from 'https';

var options = {
  method: 'POST',
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  headers: {
    'Content-Type': 'application/json',
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks: any[] = [];

  res.on('data', function (chunk: any) {
    chunks.push(chunk);
  });

  res.on('end', function (chunk: any) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on('error', function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });

export const httpsEjemplo2 = () => {
  req.write(postData);

  req.end();
};
