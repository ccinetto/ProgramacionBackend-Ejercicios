import fs from 'fs';
import path from 'path';
import { ApiError, ErrorStatus } from '../../../services/error';
import Logger from '../../../services/logger';

export default class NoticiaFsDao {
  nombreArchivo = path.resolve(process.cwd(), './products.json');
	noticias;

  constructor() {
		const fileExists = fs.existsSync(this.nombreArchivo)
		if(!fileExists){
			Logger.info('Archivo no existe, lo creamos');
			this.noticias = [
        { _id: '1', titulo: 'Noticia1', descripcion: 'Descripcion Noticia 1', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
        { _id: '2', titulo: 'Noticia2', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
        { _id: '3', titulo: 'Noticia3', descripcion: 'Descripcion Noticia 2', fyh: new Date().toLocaleString(), email: 'ejemplo@gamil.com', autor: 'Juan Carlos', imagen: 'https://media.tycsports.com/files/2022/04/12/414388/boca-memes_w416.webp' },
      ];
			this.guardar().then(() => Logger.info('Archivo inicializado'))
		}
	}

  async leer(archivo) {
    this.noticias = JSON.parse(await fs.promises.readFile(archivo, 'utf-8'));
  }

  async guardar() {
    await fs.promises.writeFile(
      this.nombreArchivo,
      JSON.stringify(this.noticias, null, '\t')
    );
  }

  async findIndex(id) {
    await this.leer(this.nombreArchivo);
    return this.noticias.findIndex((aProduct) => aProduct._id == id);
  }

  async find(id) {
    await this.leer(this.nombreArchivo);

    return this.noticias.find((aProduct) => aProduct._id === id);
  }

  async obtenerNoticias(id){
    await this.leer(this.nombreArchivo);
    if (id) {
      const index = this.findIndex(id);
      if (index < 0)
        throw new ApiError('Documento no existe', ErrorStatus.NotFound);

      return this.noticias.filter(unaNoticia => unaNoticia._id === id);
    }
    return this.noticias;
  }

  async guardarNoticia(noticia) {
    await this.leer(this.nombreArchivo);

    const newItem = {
      _id: (this.noticias.length + 1).toString(),
      fyh: new Date().toLocaleString(),
      ...noticia,
    };

    this.noticias.push(newItem);

    await this.guardar();

    return newItem;
  }

  async actualizarNoticia(id, newItemData) {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);

    const oldItem = this.noticias[index];

    const updatedItem = { ...oldItem, ...newItemData };

    this.noticias.splice(index, 1, updatedItem);

    await this.guardar();

    return updatedItem;
  }

  async borrarNoticia(id) {
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    this.noticias.splice(index, 1);
    await this.guardar();
  }
}
