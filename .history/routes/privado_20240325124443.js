const express = require("express");
const router = express.Router();

const  privadoController=require('../controllers/privadoController')



// pregunta
router.put('/pregunta/:id', productoController.actualizarPregunta);
router.get('pregunta/:id', productoController.obtenerPregunta);
router.delete('pregunta/:id', productoController.eliminarPregunta);
// 

// politicas
router.put('/politica/:id', privadoController.actualizarPolitica);
router.get('/politica/:id', privadoController.obtenerPolitica);
router.delete('/politica/:id', privadoController.eliminarPolitica);
// 


router.post('/agregarPolitica',privadoController.agregarPolitica)
router.get('/obtenerPoliticas',privadoController.getPoliticas)

router.post('/agregarPregunta',privadoController.agregarPregunta)
router.get('/obtenerPreguntas',privadoController.getPreguntas)

// router.put('/editarPolitica',privadoController.editarPolitica)
module.exports = router;

// 