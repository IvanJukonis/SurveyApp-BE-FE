const EmpleadoAdm = require('../../models/EmpleadoAdm')

const getAll = (req, res) => {
  EmpleadoAdm.find({}, (err, respo) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de Empleados', error: err })
    res.send(respo)
  })
}

const getById = (req, res) => {
  EmpleadoAdm.findById(req.params.id, (err, respo) => {
    if (err)
      res.send({ msg: `No se pudo obtener el empleado ${req.params.id}`, error: err })
    res.send(respo)
  })
}
const insert = (req, res) => {
  const respo = new EmpleadoAdm({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaNacimiento: req.body.fechaNacimiento,
    dni: req.body.dni,
    email: req.body.email,
    telefono: req.body.telefono,
    obraSocial: req.body.obraSocial,
    departamento: req.body.departamento,
    remuneracion: req.body.remuneracion,
    puesto: req.body.puesto,
    fechaContratacion: req.body.fechaContratacion,
  })
  respo.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  EmpleadoAdm.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
