const Usuario = require("../models/Usuario");
const { param } = require("../routes/usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.Login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const usuario = await Usuario.findOne({ correo });

    if (!usuario) return res.status(401).send("El correo no existe");

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) return res.status(401).send("Contraseña incorrecta");

    // Verificar si el usuario tiene un rol
    if (!usuario.rol) {
      // Si el usuario no tiene un rol, enviar un mensaje de error
      return res.status(401).send("El usuario no tiene un rol asignado");
    }

    // Si el usuario tiene un rol, firmar el token JWT con el rol incluido
    const token = jwt.sign({ _id: usuario._id, rol: usuario.rol }, "secret");
    return res.status(200).json({ token ,rol: usuario.rol});
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error en el servidor: " + error);
  }
};



// ruta de verificacion de tipo de acceso
exports.VerificaTipoRolAcceso=(req,res)=>{
  const token = req.headers.authorization;
  if (!token) {
      return res.status(403).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
      if (err) {
          return res.status(401).json({ message: 'Token inválido' });
      }

      req.user = decoded;
      next();
  });
};



// Middleware para verificar el token y el rol del usuario
exports.verifyTokenAndRole = (role) => (req, res, next) => {
  // Verificar si el usuario está autenticado
  if (!req.user) {
    return res.status(401).json({ message: 'Acceso denegado. Debes iniciar sesión.' });
  }

  // Verificar si el usuario tiene el rol adecuado
  if (req.user.role !== role) {
    return res.status(403).json({ message: `Acceso denegado. Debes ser ${role}.` });
  }

  // Si el usuario está autenticado y tiene el rol adecuado, continuar con la siguiente función
  next();
};



// Ruta protegida para administradores
exports.adminRoute = exports.verifyTokenAndRole('administrador');
// Ruta protegida para clientes
exports.clienteRoute = exports.verifyTokenAndRole('cliente');




exports.EstadoUsuario = async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    if (!cookie) {
      return res.status(401).send({
        message: "no autentificado",
      });
    }
    const claims = jwt.verfy(cookie, "secret");
    if (!claims) {
      return res.status(401).send({
        message: "no  autentificado",
      });
    }
    const usuario = await Usuario.findOne({ _id: claims._id });
    if (!usuario) {
      return res.status(401).send({
        message: "Usuario no encontrado"
      });
    }

    const { password, ...data } = await usuario.toJSON();
    res.send(data);
  } catch (error) {
    return res.status(401).send({
      message: "no autentificado",
    });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    console.log("req.body:", req.body); // Agrega este registro
    let password = req.body.pass;
    console.log("password=>:", password); // Agrega este registro
    // let password = req.body.password;
    let nombre = req.body.nombre;
    console.log("nombre=> :", nombre); // Agrega este registro
    let telefono = req.body.telefono;
    let correo = req.body.correo;
    let pregunta=req.body.pregunta;
    let respuesta=req.body.respuesta;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const record = await Usuario.findOne({ correo: correo });
    if (record) {
      return res.status(400).send({ message: "El correo ya está registrado" });
    }
    const usuario = new Usuario({
      nombre: nombre,
      correo: correo,
      telefono: telefono,
pregunta:pregunta,
respuesta: respuesta,
      password: hashedPassword
    });
    const resultado = await usuario.save();
    const { _id } = await resultado.toJSON();
    const token = jwt.sign({ _id: _id }, "secret");
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });

    res.json({
      usuario: resultado._id,
      message: "exitoso",
    });
    console.log(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor: " + error);
  }
};

// exports.login = async (req, res) => {
//   res.status(200).send("usuario logeado");
// };

exports.obtenerUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ msg: "usuario Not Found" });
    }
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).send("ucurrio un error");
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log("error de consulta");
  }
};
