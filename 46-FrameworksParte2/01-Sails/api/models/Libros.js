/**
 * Libros.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: { type: "string", columnName: "_id" },
    titulo: { type: "string", columnName: "titulo", required: true },
    descripcion: { type: "string", columnName: "descripcion", required: true },
    precio: { type: "number", columnName: "precio", required: true },
    createdAt: { type: "number", autoCreatedAt: true },
    updatedAt: { type: "number", autoUpdatedAt: true },
  },
  schema: true, //ignora los campos que se mandan y no estan definidos aca
};
