const NovedadSin = require('../../models/NovedadSin')

const getAll = (req, res) => {
  NovedadSin.find({}, (err, resp) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Novedades', error: err })
    res.send(resp)
  })
}

const getById = (req, res) => {
  NovedadSin.findById(req.params.id, (err, resp) => {
    if (err)
      res.send({ msg: `No se pudo obtener el vehiculo ${req.params.id}`, error: err })
    res.send(resp)
  })
}
const insert = (req, res) => {
  const resp = new NovedadSin({
    fechaNovedad: req.body.fechaNovedad,
    descripcion: req.body.descripcion,
    estadoNovedad: req.body.estadoNovedad,
  })
  resp.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  NovedadSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
