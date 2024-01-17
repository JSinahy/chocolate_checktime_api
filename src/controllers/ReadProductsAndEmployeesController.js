const readProductsAndEmployeesService = require("../services/ReadProductsAndEmployeesService");

const readProductsAndEmployeesController = (req, res) => {

    const idEmployee    = req.params.id_employee;
    console.log("Parametro de llegada: " + idEmployee);
    if (!idEmployee) {
        res.status(400).send({
        status: 400,
        message:  "Parameters ':id_employee' can not be empty" ,
        });
        return;
    }

    readProductsAndEmployeesService.readProductsAndEmployeesService(idEmployee, (results) => {
        console.log("Running readProductsAndEmployeesService: " + idEmployee);
        try {
            res.status(200).send( results );
        } catch (error) {
            res.status(400).send({
                code: 400,
                data: null,
                message: "An error has ocurred!: " + error,
            });
        }
    });
    console.log("Running readProductsAndEmployeesService: " + idEmployee);
};

module.exports = { readProductsAndEmployeesController };