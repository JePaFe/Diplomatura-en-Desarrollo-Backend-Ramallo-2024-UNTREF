const express = require("express");
const router = express.Router();

const controller = require("../controllers/empleados.controller");

router.get("/empleados", controller.index);

module.exports = router;
