import { ApiError, ErrorStatus } from '../../../services/error';

export default class NoticiaMemDao {
  constructor() {
    this.noticias = [
      { _id: '1', titulo: 'Noticia1', descripcion: 'Descripcion Noticia 1', fyh: new Date().toLocaleString() },
      { _id: '2', titulo: 'Noticia2', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString() },
      { _id: '3', titulo: 'Noticia3', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString() },
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

      return this.noticias[index];
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
    const index = this.findIndex(id);
    this.noticias.splice(index, 1);
  }
}
