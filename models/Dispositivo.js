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
    default: null
  },
  temperatura: {
    type: Number,
    default: null
  },
  humedad: {
    type: Number,
    default: null
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
  }
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
