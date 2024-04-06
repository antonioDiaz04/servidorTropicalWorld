// rutas para producto
const express = require("express");
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');
//api/producto
// router.put('/cambiarEstadoLed',dispositivoController.actualizaEstadoLed)
router.post('/crearDispositivo',dispositivoController.crearDispositivo)                            
router.delete('/eliminarDispositivo/:id',dispositivoController.eliminarDispositivo)                            
router.get('/obtenerEstadoDispositivo/:deviceName',dispositivoController.obtenerEstadoDispositivo)                            
router.get('/obtenerEstadoLed/:deviceName',dispositivoController.estadoled)                            
router.get('/encontrarDispositivosPorUsuarioId/:usuarioId',dispositivoController.encontrarDispositivosByUsuarioId)                            
router.get('/obtenerEstadoValancin/:deviceName',dispositivoController.estadoValancin)
router.get('/obtenerEstadoCarrucel/:deviceName',dispositivoController.estadoCarrucel)
router.get('/obtenerEstadoMusica/:deviceName',dispositivoController.estadoMusica)
router.get('/obtenerEstadoTemperaturaHumedad/:deviceName',dispositivoController.estadoHumedadTemperatura)
router.put('/cambiarEstadoLed', dispositivoController.actualizaEstadoLed);
router.put('/cambiarEstadoCarrucel', dispositivoController.actualizaEstadoCarrucel);
router.put('/cambiarEstadoValancin', dispositivoController.actualizaEstadoValancin);
router.put('/cambiarEstadoMusica', dispositivoController.actualizaEstadoMusica);
router.put('/guardar_datos', dispositivoController.actualizaEstadoTemperatura);
router.get('/', dispositivoController.obtenerDispositivos);




// actualizaEstadoTemperatura


module.exports=router;