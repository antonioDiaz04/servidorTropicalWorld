const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpass: {
    type: String,
    // required: true,
  },
  telefono: {
    type: String,
    required: true,
  }, 
  correo:{
    type:String,
    unique:true,
    required:true
},
  pregunta: {
    type: String,
    // required: true,
  },
  respuesta: {
    type: String,
    
    
  },
  rol: {
    type: String,
    required: true,
    default: "cliente",
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
