const mysqlObj = require("./mysql_conf");

const readProductsAndEmployees = (idEmployee, callback) => {
    mysqlObj.connection.query("CALL chocolate_checktime.Sp_GetProductsAndEmployees(" + idEmployee + ");", function(err_1, results) {
        if(err_1) {
            console.log("ERROR: " + err_1);
            callback(null);
            return;
        }
              
        console.log("RESULTADOS: " + JSON.stringify(results[0]));
        mysqlObj.connection.release();
        var response = {};
        if(results[0] === 0) {
            response = {
                "status": 400,
                "message": "No existen datos para este usuario.",
            }
        } else {
            response = {
                "status": 200,
                "message": "ok",
                "data": results[0]
            }
        }
        callback(response);
    });
}

module.exports = { readProductsAndEmployees };