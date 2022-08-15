import Config from './config/index.ts';
import ServerApp from './services/server.ts';

ServerApp.listen(
  3000,
  () => console.log(`server has started on http://localhost:${Config.PORT} 🚀`),
);