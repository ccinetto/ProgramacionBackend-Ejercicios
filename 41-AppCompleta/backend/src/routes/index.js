import { Router } from 'express';
import NoticiasRouter from './noticias';

export default class MainRouter {
	constructor() {}

	start() {
		const router = Router();
		const noticiasRouter = new NoticiasRouter();

		router.use('/noticias', noticiasRouter.start());

		return router;
	}
}


