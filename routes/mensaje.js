// const { continuarEnvioCorreo } = require("../controllers/correoServicio");
// rutas para producto
const express = require("express");
const router = express.Router();
const correoServicio=require('../controllers/correoServicio')


router.post('/token', correoServicio.enviarCorreoycuerpo);

module.exports=router;
