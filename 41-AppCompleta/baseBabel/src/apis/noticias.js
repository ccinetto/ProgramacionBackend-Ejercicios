import Logger from '../services/logger';
import Config from '../config';
import NoticiasFactoryDAO from '../models/noticias/DAOS/factory';
import { ApiError, ErrorStatus } from '../services/error';

export default class ApiNoticias {
  constructor() {
    this.noticiasDAO = NoticiasFactoryDAO.get(Config.PERSISTENCIA);
  }

  async obtenerNoticias(id) {
    return this.noticiasDAO.obtenerNoticias(id);
  }

  async guardarNoticia(nuevaNoticia) {
    await ApiNoticias.validarNoticia(nuevaNoticia);

    return this.noticiasDAO.guardarNoticia(nuevaNoticia);
  }

	async actualizarNoticia(id, nuevaNoticia) {
    Logger.info("Actualizar Noticia API")
    await ApiNoticias.validarNoticia(nuevaNoticia);

    return this.noticiasDAO.actualizarNoticia(id, nuevaNoticia);
  }

	async borrarNoticia(id) {
    return this.noticiasDAO.borrarNoticia(id);
  }

	static validarNoticia(noticia) {
    if(!noticia || !noticia.titulo || !noticia.descripcion) throw new ApiError('Noticia No Valida', ErrorStatus.BadRequest)
	}
}
