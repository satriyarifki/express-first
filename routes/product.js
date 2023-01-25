var express = require('express');
const { product } = require('./../models');
var router = express.Router();

/* GET users listing. */
router.get('/product', async (req, res, next) => {
	const response = await product.findAll();
	res.status(200).json(response);
});

module.exports = router;
