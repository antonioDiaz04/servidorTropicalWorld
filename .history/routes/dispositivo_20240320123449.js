// rutas para producto
const express = require("express");
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');
//api/producto
// router.put('/cambiarEstadoLed',dispositivoController.actualizaEstadoLed)
router.get('/obtenerEstadoLed',dispositivoController.estadoled)
router.put('/cambiarEstadoLed', dispositivoController.actualizaEstadoLed);
router.put('/cambiarEstadoValancin', dispositivoController.actualizaEstadoValanvin);
router.get('/', dispositivoController.obtenerDispositivos);

module.exports=router;
