const registerTimeDb = require("../database/CheckTime");

const registerTimeService = (userObject, callback) => {
    registerTimeDb.registerTimeDb(userObject, function(data) {
        console.log("DATA:" + JSON.stringify(data));
        callback(data);
    })
}

module.exports = { registerTimeService }