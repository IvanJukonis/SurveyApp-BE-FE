const VehiculoSin = require('../../models/VehiculoSin')

const getAll = (req, res) => {
  VehiculoSin.find({}, (err, vehi) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Vehiculos', error: err })
    res.send(vehi)
  })
}

const getById = (req, res) => {
  VehiculoSin.findById(req.params.id, (err, vehi) => {
    if (err)
      res.send({ msg: `No se pudo obtener el vehiculo ${req.params.id}`, error: err })
    res.send(vehi)
  })
}
const insert = (req, res) => {
  const vehi = new VehiculoSin({
    modelo: req.body.modelo,
    marca: req.body.marca,
    tipo: req.body.tipo,
    dominio: req.body.dominio,
    color: req.body.color,
    año: req.body.año
  })
  vehi.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  VehiculoSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
