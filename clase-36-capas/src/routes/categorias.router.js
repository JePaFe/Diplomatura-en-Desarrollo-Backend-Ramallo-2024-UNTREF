const express = require("express");
const router = express.Router();

const controller = require("../controllers/categorias.controller");

router.delete("/:CategoryID", controller.destroy);

module.exports = router;
