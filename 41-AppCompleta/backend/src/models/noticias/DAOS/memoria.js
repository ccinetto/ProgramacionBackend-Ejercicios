import libros from '../../../../../../46-FrameworksParte2/02-Koa/src/routes/libros';
import { ApiError, ErrorStatus } from '../../../services/error';

export default class NoticiaMemDao {
  constructor() {
    this.noticias = [
      { _id: '1', titulo: 'Noticia1', descripcion: 'Descripcion Noticia 1', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
      { _id: '2', titulo: 'Noticia2', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
      { _id: '3', titulo: 'Noticia3', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
    ];
  }

  findIndex(id) {
    return this.noticias.findIndex((aProduct) => aProduct._id == id);
  }

  find(id) {
    return this.noticias.find((aProduct) => aProduct._id === id);
  }

  async obtenerNoticias(id){
    if (id) {
      const index = this.findIndex(id);
      if (index < 0)
        throw new ApiError('Documento no existe', ErrorStatus.NotFound);

      return this.noticias.filter(unaNoticia => unaNoticia._id === id);
    }
    return this.noticias;
  }

  async guardarNoticia(noticia){
    const newItem = {
      _id: (this.noticias.length + 1).toString(),
      fyh: new Date().toLocaleString(),
      ...noticia,
    };

    this.noticias.push(newItem);

    return newItem;
  }

  async actualizarNoticia(id, newItemData){
    const index = this.findIndex(id);
    const oldItem = this.noticias[index];

    const updatedItem = { ...oldItem, ...newItemData };
    this.noticias.splice(index, 1, updatedItem);

    return updatedItem;
  }

  async borrarNoticia(id){
    const index = findIndex(id);
    libros.splice(index, 1);
  }
}
