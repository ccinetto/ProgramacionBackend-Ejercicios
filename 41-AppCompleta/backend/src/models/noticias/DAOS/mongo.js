import mongoose from 'mongoose';
import Logger from '../../../services/logger';
import Config from '../../../config';
import { ApiError, ErrorStatus } from '../../../services/error';

export default class NoticiasMongoDAO {
  static _connected = false;
  _client;
  _schema = new mongoose.Schema(
    {
      titulo: { type: String, required: true },
      descripcion: { type: String, required: true },
      autor: { type: String, required: true },
      email: { type: String, required: true },
      imagen: { type: String, required: true },
      vista: { type: Boolean, default: false },
      fyh: { type: String, default: new Date().toLocaleString() },
    },
    { versionKey: false }
  );
  _noticias = mongoose.model('noticias', this._schema);

  constructor(local = false) {
    Logger.info('Inicializamos DAO Noticias Mongo');

    if (!NoticiasMongoDAO._connected) {
      Logger.info(
        'Conexion MongoDB no establecida. Creamos conexion a mongoDB'
      );
      NoticiasMongoDAO._connected = true;
      const srv = local ? Config.MONGO_LOCAL_SRV : Config.MONGO_ATLAS_SRV;
      mongoose.connect(srv, {}).then((connection) => {
        this._client = connection;
      });
    }
  }

  async obtenerNoticias(id) {
    let output = [];

    if (id) {
      const document = await this._noticias.findById(id);
      if (document) return [document];
      else throw new ApiError('Documento no existe', ErrorStatus.NotFound);
    }
    output = await this._noticias.find();
    return output;
  }

  async guardarNoticia(data) {
    const newNoticia = await this._noticias.create(data);
    return newNoticia;
  }

  async actualizarNoticia(id, newNoticiaData) {
    const result = await this._noticias.findByIdAndUpdate(id, newNoticiaData, {
      new: true,
    });
    return result;
  }

  async borrarNoticia(id) {
    await this._noticias.findByIdAndDelete(id);
  }
}
