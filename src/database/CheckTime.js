const poolConnection = require("./mysql_conf");

const registerTimeDb = (userObject, callback) => {
   
    poolConnection.getConnection((err, connection) => {
        try {
            if(err) {
                console.log(err);
                callback(null);
                return;
            }
            connection.query("CALL chocolate_checktime.Sp_CheckTime('"+ userObject.username + "'," + userObject.nip + "," + userObject.direction + ",@ESTADO,@MSG);", function(err, results) {
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
                    connection.release();
                    
                    const response = {
                        "status": (results_1[0]["estado"] == 1) ? 200 : 400,
                        "message": results_1[0]["message"]
                    }
                    console.log(response);
                    callback(response);
                });
                
            });
        } catch(error) {
            console.log(error);
            callback({status: 500, message: error});
        }
        
    });
}

module.exports = { registerTimeDb };