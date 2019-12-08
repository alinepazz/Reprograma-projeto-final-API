const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')



router.post('', controller.add)
router.get('', controller.getAll)
router.get('/:id', controller.getById)
router.post('/:clienteId/servicos', controller.addServico)
router.get('/:id/servicos', controller.getServicos)












module.exports = router