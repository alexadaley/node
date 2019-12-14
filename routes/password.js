var express = require('express');
var router = express.Router();

const controller = require('../controllers/password.controller')

router.get('/:userId/password/', controller.getAll)
router.get('/:userId/password/:passwordId', controller.getOne)
router.post('/:userId/password/', controller.create)

module.exports = router;
