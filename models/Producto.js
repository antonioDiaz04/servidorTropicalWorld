const mongoose = require("mongoose");
const CategoriaSchema=mongoose.Schema({
  nombre:{
  type:String,
  }
  })
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
  },
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
module.exports ={
  Categoria:mongoose.model("Categoria",CategoriaSchema),
  
 Producto:
  mongoose.model('Producto', ProductoSchema)
}
;