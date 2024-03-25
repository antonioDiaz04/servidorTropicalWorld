const express = require("express");
const router = express.Router();



const  privadoController=require('../controllers/privadoController')


router.post('/agregarPolitica',privadoController.agregarPolitica)
router.get('/obtenerPoliticas',privadoController.getPoliticas)

router.post('/agregarPregunta',privadoController.agregarPregunta)
router.get('/obtenerPreguntas',privadoController.getPreguntas)

// router.put('/editarPolitica',privadoController.editarPolitica)
module.exports = router;

// 