const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NovedadSin = new Schema({
  fechaNovedad: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  estadoNovedad: {
    type: String,
    required: true
  },
  siniestro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Siniestro",
    required: true,
  },
})

const Novedad = mongoose.model('Novedad', NovedadSin)

module.exports = Novedad
