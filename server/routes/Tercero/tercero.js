const TerceroSin = require('../../models/TerceroSin')

const getAll = (req, res) => {
  TerceroSin.find({}, (err, respo) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Terceros', error: err })
    res.send(respo)
  })
}

const getById = (req, res) => {
  TerceroSin.findById(req.params.id, (err, respo) => {
    if (err)
      res.send({ msg: `No se pudo obtener el tercero ${req.params.id}`, error: err })
    res.send(respo)
  })
}
const insert = (req, res) => {
  const respo = new TerceroSin({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaNacimiento: req.body.fechaNacimiento,
    dni: req.body.dni,
    email: req.body.email,
    dni: req.body.dni,
    telefono: req.body.telefono,
  })
  respo.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  TerceroSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
