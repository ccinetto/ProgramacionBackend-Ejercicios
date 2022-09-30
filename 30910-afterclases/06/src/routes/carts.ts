import { Router, Request, Response } from "express";


const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.json({
		msg: "Get all carts"
	})
})

router.get('/:id', (req: Request, res: Response) => {
	res.json({
		msg: "Get cart by id"
	})
})

router.post('/', (req: Request, res: Response) => {
	res.json({
		msg: "POST a cart"
	})
})

router.delete('/:id', (req: Request, res: Response) => {
	res.json({
		msg: "DELETE a cart"
	})
})

router.post('/:id/products', (req: Request, res: Response) => {
	res.json({
		msg: "ADD product in a cart"
	})
})

router.delete('/:cartId/products/:productId', (req: Request, res: Response) => {
	res.json({
		msg: "Delete product in a cart"
	})
})

export default router;

export const variable1 = 2;