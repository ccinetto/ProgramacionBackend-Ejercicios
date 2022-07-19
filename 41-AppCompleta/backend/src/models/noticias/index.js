import Joi from 'joi';
import { ApiError, ErrorStatus } from '../../services/error';

export default class Noticias {
  constructor(titulo, descripcion, autor, email, imagen, vista) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;
    this.email = email;
    this.imagen = imagen;
    this.vista = vista;
  }

  static validar(noticia, requerido) {
		const schema = Joi.object({
			titulo: requerido? Joi.string().required() :  Joi.string(),
			descripcion: requerido? Joi.string().required() :  Joi.string(),
      autor: requerido? Joi.string().required() :  Joi.string(),
			email: requerido? Joi.string().required() :  Joi.string(),
      imagen: requerido? Joi.string().required() :  Joi.string(),
			vista: requerido? Joi.boolean().required() :  Joi.boolean(),
		});

    const { error } = schema.validate(noticia);

    if (error) throw new ApiError('Esquema no valido', ErrorStatus.BadRequest);
  }
}
