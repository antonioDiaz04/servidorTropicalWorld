const express=require('express');



const router=express.Router();
const bcrypt=require('bcryptjs');
const jw=require('jsonwebtoken');
const usuarioController=require('../controllers/usuarioController');
// const { obtenerUsuarios } = require("../controllers/usuarioController");
// const { crearUsuario } = require("../controllers/usuarioController");

// proteccion de rutas

router.get('/admin',usuarioController.adminRoute);
router.get('/cliente',usuarioController.clienteRoute);


router.delete('/:id', usuarioController.eliminarUsuario);

router.put('/actualizaxCorreo',usuarioController.actualizarPasswordxCorreo)
router.put('/actualizaxPregunta',usuarioController.actualizarPasswordxPregunta)

router.post('/token',usuarioController.BuscaUsuarioByToken)

router.get('/miPerfil/:correo', async (req, res) => {
    try {
      const correo = req.params.correo;
  
      // Buscar el usuario por correo en la base de datos
      const usuario = await Usuario.findOne({ correo });
  
      // Verificar si el usuario existe
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      // Devolver los datos del perfil del usuario
      return res.status(200).json({ datos: usuario });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: 'Error en el servidor' });
    }

router.post('/correo',usuarioController.BuscaUsuarioByCorreo)
router.get('/miPerfil/:',usuarioController.perfilUsuario)
router.get('/getUsuarios',usuarioController.obtenerUsuarios)
router.post('/respuesta',usuarioController.BuscaUsuarioByPreguntayRespuesta)
router.post('/singUp',usuarioController.crearUsuario);
router.post('/singIn',usuarioController.Login);
router.get('/',usuarioController.obtenerUsuarios);
router.get('/:id',usuarioController.obtenerUsuarioById)
module.exports=router;

