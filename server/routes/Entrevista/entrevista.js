const EntrevistaSin = require('../../models/EntrevistaSin')

const getAll = (req, res) => {
  EntrevistaSin.find({}, (err, resp) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Entrevistas', error: err })
    res.send(resp)
  })
}

const getById = (req, res) => {
  EntrevistaSin.findById(req.params.id, (err, resp) => {
    if (err)
      res.send({ msg: `No se pudo obtener el entrevista ${req.params.id}`, error: err })
    res.send(resp)
  })
}
const insert = (req, res) => {
  const resp = new EntrevistaSin({
    fechaEntrevista: req.body.fechaEntrevista,
    horaEntrevista: req.body.horaEntrevista,
    fechaOcurrencia: req.body.fechaOcurrencia,
    horaOcurrencia: req.body.horaOcurrencia,
    calleAsegurado: req.body.calleAsegurado,
    calleTercero: req.body.calleTercero,
    direccionTercero: req.body.dañosTercero,
    direccionAsegurado: req.body.dañosAsegurado,
    lesionesAsegurado: req.body.lesionesAsegurado,
    dañosAsegurado: req.body.dañosAsegurado,
    lesionesTercero: req.body.lesionesTercero,
    dañosTercero: req.body.dañosTercero,
    descripcionEntrevista: req.body.descripcionEntrevista
  })
  resp.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  EntrevistaSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
