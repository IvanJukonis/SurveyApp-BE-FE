const express = require('express')
const user = require('./Users/users')
const vehiculoSin = require('./Vehiculo/vehiculoIndex')
const aseguradoSin = require('./Asegurado/aseguradoIndex')
const terceroSin = require('./Tercero/terceroIndex')
const novedadSin = require('./Novedad/novedadIndex')
const entrevistaSin = require('./Entrevista/entrevistaIndex')
const siniestroSin = require('./Siniestro/siniestroIndex')
const admin = require('./AdminFunction/adminFunction')


const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))
router.use('/api/users', user)
router.use('/api/vehiculo', vehiculoSin)
router.use('/api/asegurados', aseguradoSin)
router.use('/api/terceros', terceroSin)
router.use('/api/entrevista', entrevistaSin)
router.use('/api/novedad', novedadSin)
router.use('/api/siniestro', siniestroSin)
router.use('/api/admin', admin)

module.exports = router
