const poolConnection = require("./mysql_conf");

const readProductsAndEmployees = (idEmployee, callback) => {
   
    poolConnection.getConnection((err, connection) => {
        try {
            if(err) {
                console.log(err);
                callback(null);
                return;
            }
            connection.query("CALL chocolate_checktime.Sp_GetProductsAndEmployees(" + idEmployee + ");", function(err_1, results) {
                if(err_1) {
                    console.log("ERROR: " + err_1);
                    callback(null);
                    return;
                }
              
                    console.log("RESULTADOS: " + JSON.stringify(results[0]));
                    connection.release();
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
        } catch(error) {
            console.log(error);
            callback({status: 500, message: error});
        }
        
    });
}

module.exports = { readProductsAndEmployees };