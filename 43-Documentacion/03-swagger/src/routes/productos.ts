import { Router } from 'express';
import { productsController } from '../controllers/productos';
import asyncHandler from 'express-async-handler';

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductData:
 *       type: object
 *       properties:
 *         _id:
 *           type: String
 *           description: ID del producto
 *           example: 1
 *         nombre:
 *           type: String
 *           description: nombre del producto
 *           example: Camiseta Bokita the biggest
 *         precio:
 *           type: number
 *           description: precio del producto
 *           example: 2000
 *     NewProductInput:
 *       type: object
 *       properties:
 *         nombre:
 *           type: String
 *           description: nombre del producto
 *           example: Camiseta Bokita the biggest
 *         precio:
 *           type: number
 *           description: precio del producto
 *           example: 2000
 */

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Devuelve todos los productos
 *     responses:
 *       200:
 *         description: get array of products data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items :
 *                  $ref: '#/components/schemas/ProductData'
 */
router.get('/', productsController.getProducts);

/**
 * @swagger
 * /:id:
 *   get:
 *     summary: Devuelve el producto
 *     responses:
 *       200:
 *         description: get product data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items :
 *                  $ref: '#/components/schemas/ProductData'
 *       404:
 *         description: No Product exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: objeto no encontrado
 *
 */
router.get(
  '/:id',
  productsController.checkProductExists,
  productsController.getProducts
);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProductInput'
 *     responses:
 *       200:
 *         description: retrieve new product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: producto agregado con exito
 *                 data:
 *                    $ref: '#/components/schemas/ProductData'
 *       400:
 *         description: No Product exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Campos del body invalidos
 *
 */
router.post(
  '/',
  productsController.checkAddProducts,
  asyncHandler(productsController.addProducts)
);

/**
 * @swagger
 * /:id:
 *   put:
 *     summary: Actualiza un producto existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProductInput'
 *     responses:
 *       200:
 *         description: retrieve updated product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: producto agregado con exito
 *                 data:
 *                    $ref: '#/components/schemas/ProductData'
 *       400:
 *         description: Invalid Body Parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Campos del body invalidos
 *       404:
 *         description: No Product exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: objeto no encontrado
 */
router.put(
  '/:id',
  productsController.checkProductExists,
  asyncHandler(productsController.updateProducts)
);

/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: Borra un producto existente
 *     responses:
 *       200:
 *         description: succes response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: producto borrado
 *       404:
 *         description: No Product exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: objeto no encontrado
 *
 */
router.delete(
  '/:id',
  productsController.checkProductExists,
  asyncHandler(productsController.deleteProducts)
);

export default router;
