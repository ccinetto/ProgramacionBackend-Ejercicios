import { opine, json, urlencoded } from "../depts.ts";
import MainRouter from '../router/index.ts';

const app = opine();

app.use(json()); 							// for parsing application/json
app.use(urlencoded()); 				// for parsing application/x-www-form-urlencoded

app.use('/api', MainRouter);

export default app;