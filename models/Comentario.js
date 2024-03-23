const mongoose = require("mongoose");


const ComentarioSchema = mongoose.Schema({
  

  
  nombre: {
    type: String,
    required: true,
  },

 
  correo: {
    type: String,
    required: true,
  },
  comentario: {
    type: String,
    required: true,
  }
  ,
  fechaCreacion: {
    type: String,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Comentario', ComentarioSchema);