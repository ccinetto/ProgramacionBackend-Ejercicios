const mongoose = require('mongoose');

const usuariosCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true, max: 100 },
    apellido: { type: String, require: true, max: 100 },
    email: { type: String, require: true, max: 100 },
    admin: { type: Boolean, default: false },
    usuario: { type: String, require: true, max: 100 },
    password: { type: String, require: true },
    edad: { type: Number, required: true },
  },
  { timestamps: true }
);

const UsuarioModel = mongoose.model(usuariosCollection, UsuarioSchema);

module.exports = { UsuarioModel };
