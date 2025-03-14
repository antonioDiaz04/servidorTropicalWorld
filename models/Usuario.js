const mongoose = require("mongoose");
const PreguntaSecretaSchema=mongoose.Schema({
  pregunta:{
  type:String,
  }
  })
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

  token: {
    type:String
},
  pregunta: {
    type: String,
    required:false,
  },
  respuesta: {
    type: String,
    required:false,
    
    
    
  },
  rol: {
    type: String,
    required: true,
    default: "cliente",
  },
});

module.exports = {
 Usuario: mongoose.model("Usuario", UsuarioSchema),
 PreguntasSecretas:mongoose.model("PreguntasSecretas", PreguntaSecretaSchema),
};


