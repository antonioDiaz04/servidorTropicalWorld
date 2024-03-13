const express=require('express');



const router=express.Router();
const bcrypt=require('bcryptjs');
const jw=require('jsonwebtoken');
const usuarioController=require('../controllers/usuarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

router.get('/',usuarioController.EstadoUsuario);
router.post('/',usuarioController.crearUsuario);
// router.get('/',usuarioController.obtenerUsuarios);
router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

