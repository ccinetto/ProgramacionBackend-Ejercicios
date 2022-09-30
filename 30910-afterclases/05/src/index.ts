import { initDb } from './services/database';
import server from './services/server';

const init = async () => {
	await initDb();
	const port = 8080;

	server.listen(port, ()=> console.log("READY"))
}

init();