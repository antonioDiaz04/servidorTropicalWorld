"user strict";
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const token = crypto.randomBytes(3).toString('hex').toUpperCase();

const Usuario = require("../models/Usuario");

exports.actualizarProducto = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion, precio } = req.body;
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: 'No existe el producto' });
    }
    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
    res.json(producto);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}


const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "driftspotky@gmail.com",
    pass: "bdpwlrccwlzwcxeu",
  },
});

// Ruta POST para manejar la solicitud de envío de correo electrónico
exports.enviarCorreoycuerpo= async(req, res) => {
    const correo =await req.body.correo; // Extraer el correo electrónico del cuerpo de la solicitud
    // const token = crypto.randomBytes(3).toString('hex').toUpperCase();
 const { nombre, categoria, ubicacion, precio } = req.body;

    Usuario.updateOne({ correo: correo }, { $set: { token: token } })




  .then(result => {
    console.log(`Se actualizó el token para el usuario con correo ${correo}`);
    console.log(result); // Información sobre la operación de actualización
  })
    console.log("correo obtenido=>"+correo)
    console.log("token obtenido=>"+token)
    // Lógica para enviar el correo electrónico con el token de verificación
    enviarCorreo(correo);
  
    res.status(200).json({ msg: 'Correo electrónico enviado correctamente' });
  };

// Función para enviar el correo electrónico
function enviarCorreo(correo) {
    const mailOptions = {
      from: '"Maddison Foo Koch " driftspotky@gmail.com',// Cambiar por tu email
      to: correo,
      subject: 'Recuperación de contraseña',
      html: `
        <p>Hola,</p>
        <p>Has solicitado restablecer tu contraseña. Aquí tienes tu código de verificación:</p>
        <p><strong>${token}</strong></p>
        <p>Si no has solicitado este cambio, puedes ignorar este mensaje.</p>
      `
    };
  
    // Envío del correo electrónico
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.error('Error al enviar el correo electrónico:', err);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
  }
