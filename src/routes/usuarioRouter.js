const express = require('express')
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.list)
router.get('/:id', usuarioController.findById)
router.post('/', usuarioController.create)
router.delete('/:id', usuarioController.delete)

module.exports = router;
