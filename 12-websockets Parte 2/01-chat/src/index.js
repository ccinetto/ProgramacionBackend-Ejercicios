// Import Libraries
const express = require('express');
const path = require('path');
const http = require('http');
const { initWsServer } = require('./services/socket');
const mainRouter = require('./routes');

//Basic Config
const app = express();
const server = http.Server(app);

//Init SocketIo Server
initWsServer(server);

app.use('/api', mainRouter);
// listening to port...
const port = 8080;
server.listen(port, () => console.log(`Server Up port ${port}`));

// define the paths to the static files
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
