const express=require('express');



const router=express.Router();
const bcrypt=require('bcryptjs');
const jw=require('jsonwebtoken');
const usuarioController=require('../controllers/usuarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

// proteccion de rutas

router.post('/admin',usuarioController.verfi);
router.post('/singUp',usuarioController.crearUsuario);



router.post('/singUp',usuarioController.crearUsuario);
router.post('/singIn',usuarioController.Login);
router.get('/',usuarioController.obtenerUsuarios);
router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

