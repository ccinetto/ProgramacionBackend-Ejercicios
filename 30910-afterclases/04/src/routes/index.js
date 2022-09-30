const express = require('express');
const productsRouter = require('./productos');

const router = express.Router();

router.use('/productos', productsRouter)

module.exports = router; //export por default