const server = require('./services/server');

// listening to port...
const port = 8080;
server.listen(port, () => console.log(`Server Up port ${port}`));