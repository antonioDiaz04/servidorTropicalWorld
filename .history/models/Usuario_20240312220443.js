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
    correo:{
        type:String,
        unique:true,
        required:true
    },
rol:{
     type: String, required: true, default: 'CLIENT' 
}
})


module.exports=mongoose.model('Usuario',UsuarioSchema);