const express = require('express');
const PersonasRouter = require('./personas');
const router = express();

router.use('/personas', PersonasRouter);

module.exports = router;
