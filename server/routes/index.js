const router = require('express').Router();

// mount middleware functions to specific paths
router.use('/auth', require('./auth'));

module.exports = router;
