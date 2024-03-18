// rutas para producto
const express = require("express");
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');
//api/producto
router.get('/estadoLed/led',dispositivoController.estadoled)
router.post('/guardarDatos', dispositivoController.guardaDatos);
router.get('/', dispositivoController.obtenerDispositivos);

// router.get('/:id', dispositivoController.obtenerDetalleDispositivoById);
//=================IMAGEN===========
//  user: 'tropiclaworldofficial@gmail.com', // Cambia por tu email
// pass: '123Awawn' 
// router.route('/photos/:id')
// .get(getPhotos)
// .post(deletePhoto)
// .put(udate)
// =========================
// router.put('/:id', dispositivoController.actualizarDispotivo);
// router.get('/:id', dispositivoController.obtenerDispotivos);
// router.delete('/:id', dispositivoController.eliminarDispositivo);
module.exports=router;
