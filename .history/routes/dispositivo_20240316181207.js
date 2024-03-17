// rutas para producto
const express = require("express");
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');
//api/producto
router.get('estadoLed',)
router.post('/guardarDatos', dispositivoController.guardaDatos);
router.get('/', dispositivoController.obtenerDispositivos);
// router.get('/:id', dispositivoController.obtenerDetalleDispositivoById);
//=================IMAGEN===========

// router.route('/photos/:id')
// .get(getPhotos)
// .post(deletePhoto)
// .put(udate)
// =========================
// router.put('/:id', dispositivoController.actualizarDispotivo);
// router.get('/:id', dispositivoController.obtenerDispotivos);
// router.delete('/:id', dispositivoController.eliminarDispositivo);
module.exports=router;
