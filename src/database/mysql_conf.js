require('dotenv').config()
const mysql = require("mysql");

const poolConnection = mysql.createPool({
    host: process.env.TICKET_HOST,
    user: process.env.TICKET_USERNAME,
    password: process.env.TICKET_PASSWORD,
    database: process.env.TICKET_DATABASE
});

try {
    var connection = mysql.createConnection({
      host: process.env.HOST_NAME,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  } catch (error) {
    console.log("Error al conectar con la base de datos");
}

poolConnection.on("connection", function(connection) {
    console.log("Connected!");
    
    connection.on("error", function(err) {
            console.error(new Date(), "MySQL Error", err.code);
    });
    
    connection.on("close", function(err) {
            console.error(new Date(), "MySQL Close", err.code);
    });
});

console.log("HOST: " + process.env.TICKET_HOST)
console.log("USERNAME: " + process.env.TICKET_USERNAME)
console.log("DATABASE: " + process.env.TICKET_DATABASENAME)

module.exports =  {poolConnection, connection };