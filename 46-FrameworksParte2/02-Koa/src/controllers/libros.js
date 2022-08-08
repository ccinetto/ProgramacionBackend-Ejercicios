import { uuid } from 'uuidv4';
import { libros } from '../models/libros';
import { ApiError } from '../services/error';

const getAll = () => {
  return libros;
};

const findIndex = (id) => {
	const index = libros.findIndex((unLibro) => unLibro.id == id);

  if (index < 0) throw new ApiError('Libro no encontrado', 404);

	return index;
}

const getById = (id) => {
  const index = findIndex(id);

  return libros[index];
};

const create = (data) => {
  const { name, author } = data;

  if (!name || !author) throw new ApiError('Invalid Body Data', 400);

  let newBook = {
    id: uuid(),
    name,
    author,
  };

  libros.push(newBook);

  return newBook;
};

const update = (id, data) => {
	const { name, author } = data;

	const index = findIndex(id);

	if (!name || !author) throw new ApiError('Invalid Body Data', 400);

	const oldItem = libros[index];

	const updatedItem = { ...oldItem, ...data };
	libros.splice(index, 1, updatedItem);

	return updatedItem;
}

const remove = (id) => {
	const index = findIndex(id);
	libros.splice(index, 1);
}

export const LibrosController = {
  getAll,
  getById,
  create,
	update,
	remove,
};
