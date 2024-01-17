const express = require("express");
const router = express.Router();
const registerProduction = require("../../controllers/RegisterProductsAndMermaController");
const readProduction = require("../../controllers/ReadProductsAndEmployeesController");

router.route("/").post(registerProduction.registerProductsAndMermaController);
router.route("/:id_employee").get(readProduction.readProductsAndEmployeesController)

module.exports = router;