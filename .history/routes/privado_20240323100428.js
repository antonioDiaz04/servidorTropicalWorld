const express = require("express");
const router = express.Router();



const  privadoController=require('../controllers/privadoController')


router.post('/agregarPolitica',privadoController.agregarPolitica)
router.post('/obtenerPoliticas',privadoController.getPoliticas)

// router.put('/editarPolitica',privadoController.editarPolitica)
module.exports = router;

