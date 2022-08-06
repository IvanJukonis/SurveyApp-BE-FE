const AseguradoSin = require('../../models/AseguradoSin')

const getAll = (req, res) => {
  AseguradoSin.find({}, (err, respo) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Asegurados', error: err })
    res.send(respo)
  })
}

const getById = (req, res) => {
  AseguradoSin.findById(req.params.id, (err, respo) => {
    if (err)
      res.send({ msg: `No se pudo obtener el asegurado ${req.params.id}`, error: err })
    res.send(respo)
  })
}
const insert = (req, res) => {
  const respo = new AseguradoSin({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaNacimiento: req.body.fechaNacimiento,
    dni: req.body.dni,
    email: req.body.email,
    licencia: req.body.licencia,
    conductor: req.body.conductor,
    telefono: req.body.telefono,
  })
  respo.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  AseguradoSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

module.exports = {
  getAll,
  getById,
  insert,
  remove
}
