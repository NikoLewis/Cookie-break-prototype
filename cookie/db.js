const Sequelize = require('sequelize');

//connecting database

const sequelizeConnection = new Sequelize('postgres://nikobellalewis@localhost:5432/cookie-break');


//setting success function
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

//exporting databsae connection
module.exports = sequelizeConnection;

