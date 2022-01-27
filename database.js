const { Sequelize } = require("sequelize");

// const connectdb = async () => {
// 	const sequelize = new Sequelize('postgres://postgres:sequelize@localhost:5432/test');

// 	try {
// 		await sequelize.authenticate();
// 		console.log('Connection has been established successfully.');
//         module.exports = sequelize;
// 	} catch (error) {
// 	console.error('Unable to connect to the database:', error);
// 	}
// }

// connectdb();

const sequelize = new Sequelize('postgres://postgres:sequelize@localhost:5432/test');

module.exports = sequelize;