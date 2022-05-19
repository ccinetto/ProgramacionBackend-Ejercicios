import 'dotenv/config';
import server from './services/server';

const init = async () => {

	const port = 8080;

	server.listen(port, ()=> console.log("READY"))
}

init();