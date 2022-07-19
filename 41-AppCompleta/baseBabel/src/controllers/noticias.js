import ApiNoticias from '../apis/noticias';

export default class ControladorNoticias {

	constructor() {
		this.apiNoticias = new ApiNoticias();
	}

	obtenerNoticias = async (req, res, next) => {
		try{
			const { id } = req.params;
			const noticias = await this.apiNoticias.obtenerNoticias(id)

			res.json({
				data: noticias,
			})
		}
		catch(err){
			console.log("Error obtener Noticias", err);
			next(err);
		}
	}

	guardarNoticia = async (req, res, next) => {
		try{
			const nuevaNoticia = req.body;
			const noticiaGuardada = await this.apiNoticias.guardarNoticia(nuevaNoticia)

			res.json({
				msg: 'Noticia guardada',
				data: noticiaGuardada,
			})
		}
		catch(err){
			console.log("Error guardar Noticias", err);
			next(err);
		}
	}

	actualizarNoticia = async (req, res, next) => {
		try{
			console.log("Controller actualizar noticia")
			const { id } = req.params;
			const noticia = req.body;
			const noticiaActualizada = await this.apiNoticias.actualizarNoticia(id, noticia)

			res.json({
				msg: 'Noticia actualizada',
				data: noticiaActualizada,
			})
		}
		catch(err){
			console.log("Error actualizar Noticias", err);
			next(err);
		}
	}

	borrarNoticia = async (req, res, next) => {
		try{
			const { id } = req.params;
			await this.apiNoticias.borrarNoticia(id)

			res.json({
				msg: 'Noticia borrada',
			})
		}
		catch(err){
			console.log("Error borrar Noticias", err);
			next(err);
		}
	}
}