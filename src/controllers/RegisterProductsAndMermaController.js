const registerProductsAndMermaService = require("../services/RegisterProductsAndMermaService");

const registerProductsAndMermaController = (req, res) => {

    const idEmployee    = req.body.id_employee;
    const idProduct     = req.body.id_product;
    const production    = req.body.production;
    const merma         = req.body.merma;
    const forsale       = req.body.forsale;

    //if(!merma) merma = 0;
    //if(!production) production = 0


    /*if (!idEmployee || !idProduct || !production || !merma || !forsale) {
        res.status(400).send({
        status: 400,
        data: { error: "Parameters ':username', ':pass' or ':direction' can not be empty" },
        });
        return;
    }*/

    const productionObject = {
        "id_employee": idEmployee,
        "id_product": idProduct,
        "production": production,
        "merma": merma,
        "forsale": forsale
    }

    registerProductsAndMermaService.registerProductsAndMermaService(productionObject, (results) => {
        try {
            res.status(200).send(results);
        } catch (error) {
            res.status(400).send({
                code: 400,
                data: null,
                message: "An error has ocurred!: " + error,
            });
        }
    });
};

module.exports = { registerProductsAndMermaController };