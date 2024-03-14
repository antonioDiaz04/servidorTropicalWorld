const express=require('express');



const router=express.Router();
// const bcrypt=require('bcryptjs');
// const jw=require('jsonwebtoken');
const comentarioController=require('../controllers/comentarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

// proteccion de rutas

router.get('/comentarios',comentarioController.obtenerComentarios);
// router.get('/cliente',comentarioController.clienteRoute);



// router.post('/singUp',usuarioController.crearUsuario);
// router.post('/singIn',usuarioController.Login);
// router.get('/',usuarioController.obtenerUsuarios);
// router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

