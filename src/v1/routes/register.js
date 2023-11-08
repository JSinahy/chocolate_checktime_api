const express = require("express");
const router = express.Router();
const registerTime = require("../../controllers/CheckTimeController")

router.route("/").post(registerTime.registerTimeController);

module.exports = router;