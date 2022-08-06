const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AseguradoSin = new Schema({
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
  licencia: {
    type: String,
    required: true
  },
  conductor: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
})

const Asegurado = mongoose.model('Asegurado', AseguradoSin)

module.exports = Asegurado
