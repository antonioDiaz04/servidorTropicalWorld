const mongoose = require("mongoose");
const Dispositivo = mongoose.Schema({
  

  
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
 
  precio: {
    type: Number,
    required: true,
  }
  ,
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Usuario', UsuarioSchema);