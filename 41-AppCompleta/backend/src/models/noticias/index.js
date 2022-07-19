import Joi from 'joi';
import { ApiError, ErrorStatus } from '../../services/error';

export default class Noticias {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }

  static validar(noticia) {
		const schema = Joi.object({
			titulo: Joi.string().required(),
			descripcion: Joi.string().required(),
		});

    const { error } = schema.validate(noticia);

    if (error) throw new ApiError('Esquema no valido', ErrorStatus.BadRequest);
  }
}
