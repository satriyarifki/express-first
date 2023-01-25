var express = require('express');
const { User } = require('./../models');
var router = express.Router();

/* GET users listing. */
router.get('/user', async (req, res, next) => {
	const response = await User.findAll();
	res.status(200).json(response);
});

module.exports = router;

