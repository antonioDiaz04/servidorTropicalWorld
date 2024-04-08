const mongoose = require("mongoose");
const DispositivoSchema = mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  deviceLabel: {
    type: String,
    required: true
  },
  led: {
    type: Number,
    default: 0
  },
  temperatura: {
    type: Number,
    default: 0.0
  },
  humedad: {
    type: Number,
    default: 0.0
  },
  musica: {
    type: Number,
    default: 0
  },
  valancin: {
    type: Number,
    default: 0
  },
  carrucel: {
    type: Number,
    default: 0
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Nombre del modelo de usuario al que se hace referencia
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  ultimaActualizacion: {
    type: Date,
    default: Date.now // Inicializa con la fecha y hora actual
  }
});

// Middleware que se ejecutará antes de guardar un documento
DispositivoSchema.pre('save', function(next) {
  this.ultimaActualizacion = new Date();  // Actualiza con la fecha y hora actual antes de guardar
  next();
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
