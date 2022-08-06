const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntrevistaSin = new Schema({
  fechaEntrevista: {
    type: String,
    required: true
  },
  horaEntrevista: {
    type: String,
    required: true
  },
  fechaOcurrencia: {
    type: String,
    required: true
  },
  horaOcurrencia: {
    type: String,
    required: true
  },
  calleAsegurado: {
    type: String,
    required: true
  },
  calleTercero: {
    type: String,
    required: true
  },
  direccionTercero: {
    type: String,
    required: true
  },
  direccionAsegurado: {
    type: String,
    required: true
  },
  lesionesAsegurado: {
    type: String,
    required: true
  },
  dañosAsegurado: {
    type: String,
    required: true
  },
  lesionesTercero: {
    type: String,
    required: true
  },
  dañosTercero: {
    type: String,
    required: true
  },
  descripcionEntrevista: {
    type: String,
    required: true
  },
  siniestro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Siniestro",
    required: true,
  },
})

const Entrevista = mongoose.model('Entrevista', EntrevistaSin)

module.exports = Entrevista
