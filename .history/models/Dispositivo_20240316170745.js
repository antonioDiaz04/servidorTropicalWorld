const mongoose = require("mongoose");
const DispositivoSchema = mongoose.Schema({

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
module.exports = mongoose.model('Dispositivp', DispositivoSchema);