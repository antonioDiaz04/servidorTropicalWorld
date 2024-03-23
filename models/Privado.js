const mongoose = require("mongoose");
const PrivateSchema = mongoose.Schema({

  politicas: {
    type:String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Private', PrivateSchema);