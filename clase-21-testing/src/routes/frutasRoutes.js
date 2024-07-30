const express = require('express')
const router = express.Router()
const frutasController = require('../controllers/frutasController')

// Rutas de frutas
router.get('/', frutasController.getFrutas)
router.get('/:id', frutasController.getFrutaPorId)
router.get('/nombre/:nombre', frutasController.getFrutaPorNombre)
router.get('/importe/:precio', frutasController.getFrutaPorImporte)
router.post('/', frutasController.crearFruta)
router.put('/:id', frutasController.actualizarFruta)
router.delete('/:id', frutasController.eliminarFruta)

module.exports = router
