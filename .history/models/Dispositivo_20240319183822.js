const mongoose = require("mongoose");
const DispositivoSchema = mongoose.Schema({

  fechaCreacion: {
    led: {
      type:Number,
      required: true,
    },
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Dispositivo', DispositivoSchema);