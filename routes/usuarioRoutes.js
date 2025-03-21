const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// Define routes for user operations
router.post('/', UsuarioController.create);
router.get('/:id', UsuarioController.findById);
router.get('/', UsuarioController.findAll);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;