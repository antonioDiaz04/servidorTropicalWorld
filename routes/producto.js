// rutas para producto
const express = require("express");
const router = express.Router();
const productoController = require('../controllers/productoController');
//api/producto

// Importa multerConfig
const upload  = require('../middlewares/multer');
// imagesRouter.post('/product', upload.single('imagen'), async (req, res) => {
router.post('/',upload.single('imagen'), productoController.crearProducto);
// router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerDetalleProductoById);

router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);
module.exports=router;
