const Sequelize = require("sequelize");

const Products = require("../model/produtos");

const databaseConfig = require("../config/databases");

const connection = new Sequelize(datatbaseConfig);

Products.init(connection);
module.exports = connection;

