const { mock, sequelize, Sequelize } = require('../models');

const index = async (req, res) => {
    const response = await mock.findAll();

	res.status(200).json(response);
};
const estoque_count = async (req, res) => {
	const response = await mock.findAll({
		attributes: [
			[sequelize.fn('YEAR', sequelize.col('data')), 'year'],
			[sequelize.fn('MONTHNAME', sequelize.col('data')), 'month'],
			[sequelize.fn('AVG', sequelize.col('estoque')), 'sum_estoque'],
		],
		group: [sequelize.fn('MONTH', sequelize.col('data')), 'month'],
	});

	res.status(200).json(response);
};

module.exports = {
	index,
	estoque_count,
};
