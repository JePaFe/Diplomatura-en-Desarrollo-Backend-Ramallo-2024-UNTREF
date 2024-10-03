const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");

router.get("/", controller.index);
router.get("/:productID", controller.show);
router.get("/nombre/:productName", controller.findName);
router.get("/categoria/:categoryID", controller.forCategory);
router.get("/buscar/:query", controller.buscar);
router.get("/importemayor/:unitPrice", controller.mayorPrecio);
router.post("/", controller.store);
router.put("/:ProductID", controller.update);
router.delete("/:ProductID", controller.destroy);

module.exports = router;
