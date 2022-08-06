const express = require('express')
const controller = require('./users')

const router = express.Router()
const { getAll } = controller

router.use(express.json())

router.get('/', getAll)

module.exports = router
