const express=require('express');



const router=express.Router();
const comentarioController=require('../controllers/comentarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

// proteccion de rutas

router.get('/',comentarioController.obtenerComentarios);
// router.get('/cliente',comentarioController.clienteRoute);



router.post('/comentarioInvitado',comentarioController.crearComentarioInvitado);
// router.post('/singIn',usuarioController.Login);
// router.get('/',usuarioController.obtenerUsuarios);
// router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

