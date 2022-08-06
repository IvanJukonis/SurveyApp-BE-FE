const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SiniestroSin = new Schema({
  numPoliza: {
    type: Number,
    required: true
  },
  numSiniestro: {
    type: Number,
    required: true
  },
  fechaSiniestro: {
    type: String,
    required: true
  },
  fechaVencimiento: {
    type: String,
    required: true
  },
  fechaDenuncia: {
    type: String,
    required: true
  },
  descripcionDenuncia: {
    type: String,
    required: true
  },
  estadoSiniestro: {
    type: String,
    required: true
  },
  tipoInforme: {
    type: String,
    required: true
  },
  tipoRelevamiento: {
    type: String,
    required: true
  },
  provinciaSiniestro: {
    type: String,
    required: true
  },
  ciudadSiniestro: {
    type: String,
    required: true
  },
  ubicacionSiniestro: {
    type: String,
    required: true
  },
  asegurado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asegurado",
    required: true,
  },

  tercero: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tercero",
    required: true,
  },
})

const Siniestro = mongoose.model('Siniestro', SiniestroSin)

module.exports = Siniestro
