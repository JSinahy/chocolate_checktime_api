const readProductsAndEmployeesDB = require("../database/ReadProductsAndEmployees");

const readProductsAndEmployeesService = (idEmployee, callback) => {
    console.log("Running service: " + idEmployee);
    readProductsAndEmployeesDB.readProductsAndEmployees(idEmployee, function(data) {
        console.log("DATA:" + JSON.stringify(data));
        callback(data);
    })
}

module.exports = { readProductsAndEmployeesService }