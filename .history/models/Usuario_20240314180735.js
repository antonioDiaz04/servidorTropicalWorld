const mongoose=require('mongoose');

const UsuarioSchema=mongoose.Schema({

    nombre:{
        type:String,
        required:true,
    },
    password:{
        type:String,
       required :true
    },
    telefono:{
        type:String,
       required :true
    },
    pregunta:{
        type:String,
        unique:true,
        required:true
    },
    respuesta:{
        type:String,
        unique:true,
        required:true
    },
    correo:{
        type:String,
        unique:true,
        required:true
    },
rol:{
     type: String, required: true, default: 'cliente' 
}
})


module.exports=mongoose.model('Usuario',UsuarioSchema);