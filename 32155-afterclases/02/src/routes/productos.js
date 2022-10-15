const asyncHandler = require('express-async-handler')
const { Router } = require('express');
const { ProductsController } = require('../controller/productos');

const router = Router();

router.get('/', (req, res) => {
	res.json({
		msg: ProductsController.getAll()
	})
})

router.get('/:id', (req, res) => {
	const id = req.params.id;

	const product = ProductsController.getById(id)
	res.json({
		msg: product
	})
})

// Cuando la funcion es asincronica.
// si esta falla hay que pasar el error con next() para que lo ataje el middleware de src/services/server
router.post('/', async (req, res, next) => {
	// const body = req.body;
	const { body }  = req

	try{
		const data = await ProductsController.save(body);
		res.json({
			msg: data
		})
	} catch (err) {
		next(err);
	}
})

//https://www.npmjs.com/package/express-async-handler
// esta libreria te permite envolver tu funcion async y despreocuparte del try/catch y llamar a next
const funcionAsync = async (req, res) => {
	const id = req.params.id;
	const { body }  = req

	const data = await ProductsController.findByIdAndUpdate(id, body);
	res.json({
		msg: data
	})
}

router.put('/:id', asyncHandler(funcionAsync));

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	res.json({
		msg: ProductsController.findByIdAndDelete(id)
	})
})

module.exports = router;