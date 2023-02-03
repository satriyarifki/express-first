'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class mock extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	mock.init(
		{
			data: DataTypes.DATE,
			venda: DataTypes.INTEGER,
			estoque: DataTypes.INTEGER,
			preco: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: 'mock',
		}
	);
	return mock;
};
