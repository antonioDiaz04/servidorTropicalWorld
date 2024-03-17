const mongoose = require("mongoose");
const Dispositivo = mongoose.Schema({
  

  
  leds: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Usuario', UsuarioSchema);