import express from 'express';
import ControladorNoticias from '../controllers/noticias';

export default class NoticiasRouter {
	constructor() {
		this.noticiasController = new ControladorNoticias();
	}

	start() {
		const router = express.Router();

		router.get('/:id?', this.noticiasController.obtenerNoticias)
		router.post('/', this.noticiasController.guardarNoticia)
		router.put('/:id', this.noticiasController.actualizarNoticia)
		router.delete('/:id', this.noticiasController.borrarNoticia)

		return router;
	}
}