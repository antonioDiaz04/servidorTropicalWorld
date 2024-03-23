const mongoose = require("mongoose");
const PrivateSchema = mongoose.Schema({

  politicas: {
    type:String,
    required: true,
    default: Date.now
  },
  temperatura:{
    type:Number,
    default: Date.now,

  },humedad:{
    type:Number,
    default: Date.now

  },musica:{
type:Number,
default: Date.now,
  }
  ,valancin:{
    type:Number,
    default: Date.now,
      }
      
  ,carrucel:{
    type:Number,
    default: Date.now,
      }
      ,
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.exports = mongoose.model('Producto', ProductoSchema);
module.exports = mongoose.model('Private', PrivateSchema);