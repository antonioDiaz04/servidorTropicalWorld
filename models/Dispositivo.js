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
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
