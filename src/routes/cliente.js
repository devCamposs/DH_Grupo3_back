const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

//C
router.post('/', clienteController.create);//ok josé
//R
router.get('/', clienteController.findAll);//ok josé
router.get('/:id', clienteController.findById);//ok josé
//U
router.put('/:id', clienteController.update);//ok josé
//D
router.delete('/:id', clienteController.destroy);//ok josé
router.post('/login', clienteController.login)

module.exports = router;