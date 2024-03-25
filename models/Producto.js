const mongoose = require("mongoose");
const ProductoSchema = mongoose.Schema({
  

  
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
  },descripcion:{

    type:String,
    required: true,
  }
  ,
  
  imagen:{

    type:String,
    required: true,
  }
  ,
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Producto', ProductoSchema);