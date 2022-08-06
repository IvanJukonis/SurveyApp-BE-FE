const SiniestroSin = require('../../models/SiniestroSin')

const getAll = (req, res) => {
  SiniestroSin.find({}).populate('responsable', 'apellido').exec((err, resp) => {
    console.log(resp)
    if (err) res.send({ msg: 'No se pudo obtener la lista de Siniestros', error: err })
    res.send({...resp, asd: 'hola'})
  })
}



const getById = (req, res) => {
  SiniestroSin.findById(req.params.id, (err, resp) => {
    if (err)
      res.send({ msg: `No se pudo obtener el Siniestro ${req.params.id}`, error: err })
    res.send(resp)
  })
}
const insert = (req, res) => {
  const resp = new SiniestroSin({
    tercero: req.body.tercero,
    asegurado: req.body.asegurado,
    numPoliza: req.body.numPoliza,
    numSiniestro: req.body.numSiniestro,
    fechaSiniestro: req.body.fechaSiniestro,
    fechaVencimiento: req.body.fechaVencimiento,
    fechaDenuncia: req.body.fechaDenuncia,
    descripcionDenuncia: req.body.descripcionDenuncia,
    estadoSiniestro: req.body.estadoSiniestro,
    tipoInforme: req.body.tipoInforme,
    tipoRelevamiento: req.body.tipoRelevamiento,
    provinciaSiniestro: req.body.provinciaSiniestro,
    ciudadSiniestro: req.body.ciudadSiniestro,
    ubicacionSiniestro: req.body.ubicacionSiniestro,
  })
  resp.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  SiniestroSin.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
