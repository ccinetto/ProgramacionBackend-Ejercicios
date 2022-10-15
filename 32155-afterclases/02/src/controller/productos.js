const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid');

class ProductsAPI {
	constructor () {
		this.productos = [
			{ id: 'db890342-b83b-4fb4-a3b3-2c61a504b0f4', title: 'Remera', price: 20 }
		];
	}

	exists(id) {

		const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

		// if(indice < 0){
		// 	return false;
		// } else {
		// 	return true;
		// }

		console.log(indice);
		return indice >= 0;
	}

	validateBody(data) {
		if(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw createError(400,'Datos invalidos');
	}

	getAll() {
		return this.productos;
	}

	//Ojo que este metodo es sincronico
	getById(id) {
		const exist = this.exists(id);

		//mandame un error propio con un http status definido y un mensaje definido
		if(!exist) throw createError(404, 'El producto no existe');

		const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

		return this.productos[indice];
	}

	save(data) {
		this.validateBody(data);

		const nuevoProducto = {
			title: data.title,
			price: data.price,
			id: uuidv4(),
		}

		this.productos.push(nuevoProducto);
		return nuevoProducto;
	}

	findByIdAndUpdate(id, datanueva) {
		const exist = this.exists(id);

		if(!exist) throw createError(404, 'El producto no existe');

		this.validateBody(datanueva);

		const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

		const oldProduct =  this.productos[indice];

		const nuevoProducto = {
			id: oldProduct.id,
			title: datanueva.title,
			price: datanueva.price,
		}

		this.productos.splice(indice, 1, nuevoProducto);

		return nuevoProducto;
	}

	findByIdAndDelete(id) {
		const exist = this.exists(id);
		if(!exist) return;

		const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

		this.productos.splice(indice, 1);
	}

	random() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(createError(404, 'El producto no existe'))
			}, 500)
		})
	}

}

const instanciaProductsApi = new ProductsAPI();

module.exports = {
	ProductsController : instanciaProductsApi
}

