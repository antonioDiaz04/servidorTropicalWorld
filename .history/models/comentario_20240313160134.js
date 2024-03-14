const mongoose = require("mongoose");
const ComentarioSchema = mongoose.Schema({
  

  
  nombre: {
    type: String,
    required: true,
  },

 
  correo: {
    type: Number,
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