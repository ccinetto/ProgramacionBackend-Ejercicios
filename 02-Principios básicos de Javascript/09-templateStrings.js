var http = require('http');

const generateHTML = function (nombre) {
  return `
    <!DOCTYPE html>
    <html>
    <body>

    <p>Hello ${nombre}</p>

    </body>
    </html>
    `;
};

const requestListener = function (req, res) {
  res.end(generateHTML('Coderhouse'));
};

const server = http.createServer(requestListener);
server.listen(8080);
