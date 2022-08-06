const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TerceroSin = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
})

const Tercero = mongoose.model('Tercero', TerceroSin)

module.exports = Tercero
