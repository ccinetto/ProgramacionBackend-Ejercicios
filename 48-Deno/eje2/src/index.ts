import { config } from '../deps.ts';
import ServerApp from './services/server.ts'

const { PORT } = config();

await ServerApp.listen({ port: Number(PORT) });
console.log(`Server up on port ${PORT}`);