const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmpleadoAdm = new Schema({
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
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  obraSocial: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
  remuneracion: {
    type: Number,
    required: true
  },
  puesto: {
    type: String,
    required: true
  },
  fechaContratacion: {
    type: String,
    required: true
  },

})

const Empleado = mongoose.model('Empleado', EmpleadoAdm)

module.exports = Empleado
