const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehiculoSin = new Schema({
  modelo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  dominio: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  año: {
    type: Number,
    required: true
  },
})

const Vehiculo = mongoose.model('Vehiculo', VehiculoSin)

module.exports = Vehiculo
