const express = require('express')

const router = express.Router()
const Vehiculo = require('../../models/VehiculoSin')
const Entrevista = require('../../models/EntrevistaSin')
const Asegurado = require('../../models/AseguradoSin')
const Tercero = require('../../models/TerceroSin')
const Siniestro = require('../../models/SiniestroSin')
const Novedad = require('../../models/NovedadSin')
const LoginAuditory = require('../../models/loginAuditory')
const { User } = require('../../models/User')
const Empleado = require('../../models/EmpleadoAdm')


router.get('/getUsersAuditory', (req, res) => {
  LoginAuditory.find()
    .populate('_id')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getNovedades', (req, res) => {
  Novedad.find()
  .populate('siniestro')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getUsers', (req, res) => {
  User.find()
    .populate('_id')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})


router.get('/getVehiculos', (req, res) => {
  Vehiculo.find()
    .populate('_id')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getAsegurados', (req, res) => {
  Asegurado.find()
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getEmpleados', (req, res) => {
  Empleado.find()
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getTerceros', (req, res) => {
  Tercero.find()
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getSiniestros', (req, res) => {
  Siniestro.find()
    .populate('asegurado')
    .populate('tercero')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})

router.get('/getEntrevistas', (req, res) => {
  Entrevista.find()
    .populate('siniestro')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})



router.post('/addAuditoryUser', (req, res) => {
  const auditoryUser = new LoginAuditory(req.body)
  auditoryUser.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addVehiculo', (req, res) => {
  const vehiculo = new Vehiculo(req.body)
  vehiculo.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addEntrevista', (req, res) => {
  const entrevista = new Entrevista(req.body)
  entrevista.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addEmpleado', (req, res) => {
  const empleado = new Empleado(req.body)
  empleado.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addAsegurado', (req, res) => {
  const asegurado = new Asegurado(req.body)
  asegurado.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addTercero', (req, res) => {
  const tercero = new Tercero(req.body)
  tercero.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addSiniestro', (req, res) => {
  const siniestro = new Siniestro(req.body)
  siniestro.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addNovedad', (req, res) => {
  const novedad = new Novedad(req.body)
  novedad.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/deleteNovedad', (req, res) => {
  Novedad.findOneAndDelete({
    _id: req.body._id,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, doc })
  })
})

router.post('/deleteVehiculo', (req, res) => {
  Vehiculo.findOneAndDelete({
    _id: req.body._id,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, doc })
  })
})


module.exports = router
