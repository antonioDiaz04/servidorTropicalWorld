// rutas para producto
const express = require("express");
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');
//api/producto
// router.put('/cambiarEstadoLed',dispositivoController.actualizaEstadoLed)
router.get('/obtenerEstadoLed',dispositivoController.estadoled)
router.get('/obtenerEstadoValancin',dispositivoController.obtenerEstadoValancin)
router.put('/cambiarEstadoLed', dispositivoController.actualizaEstadoLed);
router.put('/cambiarEstadoValancin', dispositivoController.actualizaEstadoValancin);
router.get('/', dispositivoController.obtenerDispositivos);

module.exports=router;
