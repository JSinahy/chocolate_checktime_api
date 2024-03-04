const {poolConnection, mysqlConnection} = require("./mysql_conf");

const registerProductsAndMerma = (productionObject, callback) => {
    mysqlConnection.query("CALL chocolate_checktime.Sp_RegisterProductionAndMerma('"
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
        mysqlConnection.query("SELECT @ESTADO as estado, @MSG as message;", function(err_1, results_1){
            if(err_1) {
                console.log("ERROR: " + err_1);
                callback(null);
                return;
            }
            console.log("RESULTADOS: " + JSON.stringify(results[0]));
            mysqlConnection.release();
            const response = {
                "status": results_1[0]["estado"],
                "message": results_1[0]["message"]
            }
            callback(response);
        });
    });      
}

module.exports = { registerProductsAndMerma };