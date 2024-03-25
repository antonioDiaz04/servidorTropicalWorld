const express = require("express");
const router = express.Router();



const  privadoController=require('../controllers/privadoController')



// pregunta
router.put('/pregunta/:id', productoController.actualizarPregunta);
router.get('pregunta/:id', productoController.obtenerPregunta);
router.delete('pregunta/:id', productoController.eliminarPregunta);
// 


router.post('/agregarPolitica',privadoController.agregarPolitica)
router.get('/obtenerPoliticas',privadoController.getPoliticas)

router.post('/agregarPregunta',privadoController.agregarPregunta)
router.get('/obtenerPreguntas',privadoController.getPreguntas)

// router.put('/editarPolitica',privadoController.editarPolitica)
module.exports = router;

// 