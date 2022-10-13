const app = require('./services/server');

const puerto = 8080;

const httpServer = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

httpServer.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});
