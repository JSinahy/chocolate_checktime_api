require('dotenv').config()
const mysql = require("mysql");

const poolConnection = mysql.createPool({
    host: process.env.TICKET_HOST,
    user: process.env.TICKET_USERNAME,
    password: process.env.TICKET_PASSWORD,
    database: process.env.TICKET_DATABASE
});

console.log("HOST: " + process.env.TICKET_HOST)
console.log("USERNAME: " + process.env.TICKET_USERNAME)
console.log("DATABASE: " + process.env.TICKET_DATABASENAME)

module.exports =  poolConnection;