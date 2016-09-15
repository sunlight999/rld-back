var router = require('express').Router();

// split up route handling
router.use('/user', require('./user'));
router.use('/date', require('./date'));
// etc.

module.exports = router;