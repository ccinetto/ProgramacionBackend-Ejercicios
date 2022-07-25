import Logger from '../services/logger';
import Config from '../config';
import NoticiasFactoryDAO from '../models/noticias/DAOS/factory';
import Joi from 'joi';
import { ApiError, ErrorStatus } from '../services/error';

export default class ApiNoticias {
  constructor() {
    this.noticiasDAO = NoticiasFactoryDAO.get(Config.PERSISTENCIA);
  }

  async obtenerNoticias(id) {
    return this.noticiasDAO.obtenerNoticias(id);
  }

  async guardarNoticia(nuevaNoticia) {
    await ApiNoticias.validarNoticia(nuevaNoticia, true);

    return this.noticiasDAO.guardarNoticia(nuevaNoticia);
  }

  async actualizarNoticia(id, nuevaNoticia) {
    Logger.info('Actualizar Noticia API');
    await ApiNoticias.validarNoticia(nuevaNoticia, false);

    return this.noticiasDAO.actualizarNoticia(id, nuevaNoticia);
  }

  async borrarNoticia(id) {
    return this.noticiasDAO.borrarNoticia(id);
  }

  static validarNoticia(noticia, requerido = true) {
    const schema = Joi.object({
      titulo: requerido ? Joi.string().required() : Joi.string(),
      descripcion: requerido ? Joi.string().required() : Joi.string(),
      autor: requerido ? Joi.string().required() : Joi.string(),
      email: requerido ? Joi.string().required() : Joi.string(),
      imagen: requerido ? Joi.string().required() : Joi.string(),
      vista: requerido ? Joi.boolean().required() : Joi.boolean(),
    });

    const { error } = schema.validate(noticia);

    if (error) throw new ApiError(`Esquema no valido. ${error}`, ErrorStatus.BadRequest);
  }
}
