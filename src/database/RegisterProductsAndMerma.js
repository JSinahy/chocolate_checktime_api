const poolConnection = require("./mysql_conf");

const registerProductsAndMerma = (productionObject, callback) => {
   
    poolConnection.getConnection((err, connection) => {
        try {
            if(err) {
                console.log(err);
                callback(null);
                return;
            }
            connection.query("CALL chocolate_checktime.Sp_RegisterProductionAndMerma('"
                + productionObject.id_employee + "'," 
                + productionObject.id_product + "," 
                + productionObject.production + ","
                + productionObject.merma + ","
                + productionObject.forsale
                + ",@ESTADO,@MSG);", function(err, results) {
                if(err) {
                    console.log("ERROR: " + err);
                    callback(null);
                    return;
                }
                connection.query("SELECT @ESTADO as estado, @MSG as message;", function(err_1, results_1){
                    if(err_1) {
                        console.log("ERROR: " + err_1);
                        callback(null);
                        return;
                    }
                    console.log("RESULTADOS: " + JSON.stringify(results[0]));
                    connection.release();
                    const response = {
                        "status": results_1[0]["estado"],
                        "message": results_1[0]["message"]
                    }
                    callback(response);
                });
                
            });
        } catch(error) {
            console.log(error);
            callback({status: 500, message: error});
        }
        
    });
}

module.exports = { registerProductsAndMerma };