const mongoose = require("mongoose");
const DispositivoSchema = mongoose.Schema({

  led: {
    type:Number,
    required: true,
  },
  temperatura:{
    type:Number
  },humedad:{
    type:Number
  },musica:{
type:Number
  }
  ,
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Dispositivo', DispositivoSchema);