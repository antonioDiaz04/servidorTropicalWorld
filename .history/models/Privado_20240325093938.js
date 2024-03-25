const mongoose = require("mongoose");
const PoliticaNegocioSchema = mongoose.Schema({

  titulo: {
    type:String,
    required: true,
  },
  contenido: {
    type:String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});
const AcercaSchema = mongoose.Schema({

  titulo: {
    type:String,
    required: true,
  },
  
  contenido: {
    type: String,
    default: Date.now(),
  },
});



const PreguntaSchema = mongoose.Schema({

  titulo: {
    type:String,
    required: true,
  },
  contenido: {
    type: String,
    default: Date.now(),
  },
});
const ContactoSchema = mongoose.Schema({

  titulo: {
    type:String,
    required: true,
  },
  contenido: {
    type: String,
    default: Date.now(),
  },
});


module.exports = {
    Politica: mongoose.model("Politica", PoliticaNegocioSchema),
    AcercaDe: mongoose.model("AcercaDe", AcercaSchema),
    Pregunta: mongoose.model("Pregunta", PreguntaSchema),
    Contacto: mongoose.model("Contacto", ContactoSchema),
  };