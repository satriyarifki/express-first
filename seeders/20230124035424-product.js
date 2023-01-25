'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('products', [
			{
				name: 'Acer Predator',
				color: 'Navy',
				processor: 'Intel I9 12k',
				price: 1000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'MacBook',
				color: 'White',
				processor: 'M1 Pro',
				price: 16000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Lenovo Legion',
				color: 'Black',
				processor: 'Intel I7',
				price: 9000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Asus ROG',
				color: 'Black',
				processor: 'Ryzen 9 7200x',
				price: 13000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
