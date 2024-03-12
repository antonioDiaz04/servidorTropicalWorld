// rutas para producto
const express = require("express");
const router = express.Router();
const upload = require('../libs/multer');
const productoController = require('../controllers/productoController');
//api/producto
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerDetalleProductoById);
//=================IMAGEN===========
router.route('/photos')
.get(productoController.obtenerProductos)
.post(productoController.crearProducto);
// router.route('/photos/:id')
// .get(getPhotos)
// .post(deletePhoto)
// .put(udate)
// =========================
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);
module.exports=router;
