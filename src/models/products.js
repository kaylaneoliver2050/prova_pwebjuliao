const { Model, DataTypes } = require("sequelize");
class Products extends Models 
{
	static init(sequelize) {
		super.init({
				name: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				created: DataTypes.DATE,
				updated: DataTypes.DATE,
			},
			{
				sequelize,
			});
	}}

module.exports = Products;