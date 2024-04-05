const express = require("express");
const router = express.Router();

const  privadoController=require('../controllers/privadoController')


//preguntas secretas

// 


// pregunta
router.put('/pregunta/:id', privadoController.actualizarPregunta);
router.get('/pregunta/:id', privadoController.obtenerPregunta);
router.delete('/eliminarPregunta/:id', privadoController.eliminarPregunta);
// 


// politicas
router.put('/politica/:id', privadoController.actualizarPolitica);
router.get('/politica/:id', privadoController.obtenerPolitica);
router.delete('/eliminarPolitica/:id', privadoController.eliminarPolitica);
// 


router.post('/agregarPolitica',privadoController.agregarPolitica)
router.get('/obtenerPoliticas',privadoController.getPoliticas)

router.post('/agregarPregunta',privadoController.agregarPregunta)
router.get('/obtenerPreguntas',privadoController.getPreguntas)

// router.put('/editarPolitica',privadoController.editarPolitica)
// router.get('/traerQuestiones',privadoController.getquestiones) 
module.exports = router;

// 