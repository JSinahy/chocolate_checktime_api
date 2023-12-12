const registerProductsAndMermaDB = require("../database/RegisterProductsAndMerma");

const registerProductsAndMermaService = (productionObject, callback) => {
    registerProductsAndMermaDB.registerProductsAndMerma(productionObject, function(data) {
        console.log("DATA:" + JSON.stringify(data));
        callback(data);
    })
}

module.exports = { registerProductsAndMermaService }