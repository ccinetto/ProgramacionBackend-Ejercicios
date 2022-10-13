const { Router } = require('express');
const recurso1Router = require('./recurso1');
const recurso2Router = require('./recurso2');

const router = Router();

router.use('/recurso1', recurso1Router);
router.use('/recurso2', recurso2Router);

module.exports = router