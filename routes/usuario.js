const express=require('express');



const router=express.Router();
const bcrypt=require('bcryptjs');
const jw=require('jsonwebtoken');
const usuarioController=require('../controllers/usuarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

// proteccion de rutas

// router.get('/traerQuestiones',privadoController.getquestiones) 
router.get('/admin',usuarioController.adminRoute);
router.get('/cliente',usuarioController.clienteRoute);
router.get('/getPreguntasSecretas',usuarioController.listarSecretas);
router.put('/actualizaRol/:id',usuarioController.actualizaRolUsuario);

router.delete('/:id', usuarioController.eliminarUsuario);

router.put('/actualizaxCorreo',usuarioController.actualizarPasswordxCorreo)
router.put('/actualizaxPregunta',usuarioController.actualizarPasswordxPregunta)

router.post('/token',usuarioController.BuscaUsuarioByToken)


router.get('/buscaUsuarioByCorreo/:correo',usuarioController.buscaUsuarioByCorreo)
router.post('/correo',usuarioController.BuscaUsuarioByCorreo)
router.get('/miPerfil/:correo',usuarioController.perfilUsuario)
router.get('/getUsuarios',usuarioController.obtenerUsuarios)
router.post('/respuesta',usuarioController.BuscaUsuarioByPreguntayRespuesta)
router.post('/singUp',usuarioController.crearUsuario);
router.post('/singIn',usuarioController.Login);
router.get('/',usuarioController.obtenerUsuarios);
router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

