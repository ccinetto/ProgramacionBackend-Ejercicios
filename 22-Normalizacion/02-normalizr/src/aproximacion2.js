import { normalize, schema } from 'normalizr';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, '../data/input.json');
const outputPath = path.resolve(__dirname, '../data/output.json');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

const user = new schema.Entity(
  'users',
  {},
  {
    idAttribute: '_id',
  }
);

const comment = new schema.Entity('comments', {
  commenter: user,
});

const article = new schema.Entity('articles', {
  comments: [comment],
  author: user,
});

const normalizedData = normalize(data, [article]);

let contenido = JSON.stringify(normalizedData, null, '\t');

fs.writeFileSync(outputPath, contenido);

const idUser = '6145f159b90a59691484f99d';

const comments = Object.values(normalizedData.entities.comments);

const result = comments.filter((aComment) => aComment.commenter == idUser);

console.log(`Los comentarios del usuario ${idUser} son :`);
console.log(result);

////////////////////////
import { normalize, schema } from 'normalizr';

const empresa = {
  id: '1000',
  nombre: 'Coderhouse',
  gerente: {
    id: '2',
    nombre: 'Pedro',
    apellido: 'Mei',
    DNI: '20442639',
    direccion: 'CABA 457',
    telefono: '1567811544',
  },
  encargado: {
    id: '3',
    nombre: 'Pablo',
    apellido: 'Blanco',
    DNI: '20442640',
    direccion: 'CABA 458',
    telefono: '1567811545',
  },
  empleados: [
    {
      id: '1',
      nombre: 'Nicole',
      apellido: 'Gonzalez',
      DNI: '20442638',
      direccion: 'CABA 456',
      telefono: '1567811543',
    },
    {
      id: '2',
      nombre: 'Pedro',
      apellido: 'Mei',
      DNI: '20442639',
      direccion: 'CABA 457',
      telefono: '1567811544',
    },
    {
      id: '3',
      nombre: 'Pablo',
      apellido: 'Blanco',
      DNI: '20442640',
      direccion: 'CABA 458',
      telefono: '1567811545',
    },
    {
      id: '4',
      nombre: 'Ana',
      apellido: 'Rojo',
      DNI: '20442641',
      direccion: 'CABA 459',
      telefono: '1567811546',
    },
    {
      id: '5',
      nombre: 'Lucia',
      apellido: 'Sorbo',
      DNI: '20442642',
      direccion: 'CABA 460',
      telefono: '1567811547',
    },
    {
      id: '6',
      nombre: 'Jose',
      apellido: 'Pieres',
      DNI: '20442643',
      direccion: 'CABA 461',
      telefono: '1567811548',
    },
    {
      id: '7',
      nombre: 'Maria',
      apellido: 'Lopez',
      DNI: '20442644',
      direccion: 'CABA 462',
      telefono: '1567811549',
    },
  ],
};
