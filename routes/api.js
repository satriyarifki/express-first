var express = require('express');
const mockController = require('../controller/mock.controller');
const { product } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/product', async (req, res, next) => {
	const response = await product.findAll();
	res.status(200).json(response);
});

router.get('/mock', mockController.index);
router.get('/mock/eq', mockController.estoque_count);

module.exports = router;
