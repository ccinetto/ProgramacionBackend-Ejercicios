const fs = require('fs');

const nombreArchivo = 'productos.json';


const validateExistFile = async () => {
	try{
		await fs.promises.stat(nombreArchivo)
	} catch(err) {
		await fs.promises.writeFile(nombreArchivo, JSON.stringify([]));
	}
}

const obtenerProductos = async () => {
	await validateExistFile();
	const dato = await fs.promises.readFile(nombreArchivo, 'utf-8');
	return JSON.parse(dato);
}

const guardarProductos = async (productos) => {
	await validateExistFile();
	const data = JSON.stringify(productos, null, '\t')
	await fs.promises.writeFile(nombreArchivo, data)
};

const getAll = async () => {
	const productos = await obtenerProductos();
	return productos;
}

const getById = async (idBuscado) => {
	const productos = await obtenerProductos();

	const indice = productos.findIndex((unProducto) => unProducto.id === idBuscado );

	if(indice < 0) {
		throw new Error('El producto no existe');
	}

	return productos[indice];
}

const save = async (data) => {
	if(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Datos invalidos');

	const productos = await obtenerProductos();

	let id = 1;

	if(productos.length){	//Si tengo elementos en mi array
		id = productos[productos.length -1].id + 1
	}

	const nuevoProducto = {
		title: data.title,
		price: data.price,
		id: id
	}

	productos.push(nuevoProducto);

	await guardarProductos(productos)
}

const deleteAll = async () => {
	await guardarProductos([]);
}

const deleteById = async (idBuscado) => {
	const productos = await obtenerProductos();

	const indice = productos.findIndex((unProducto) => unProducto.id === idBuscado );

	if(indice < 0) {
		return;
	}

	productos.splice(indice,1);

	await guardarProductos(productos);
}

// Llamado a getAll

const main = async () => {
	console.log('1) Llamado a los productos getAll ')
	const productos = await getAll();
	console.log(productos);

	console.log('2) Guardo un producto ')
	const nuevoProducto = { title: 'Remera', price: 20 };
	await save(nuevoProducto);
	console.log(await getAll());
}
