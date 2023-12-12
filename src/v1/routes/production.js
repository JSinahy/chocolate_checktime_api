const express = require("express");
const router = express.Router();
const registerProduction = require("../../controllers/RegisterProductsAndMermaController")

router.route("/").post(registerProduction.registerProductsAndMermaController);

module.exports = router;