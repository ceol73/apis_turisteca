const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/auth');

// Define routes for user operations
router.post('/', UsuarioController.create);
router.get('/:id', auth, UsuarioController.findById);
router.get('/', auth, UsuarioController.findAll);
router.put('/:id', auth, UsuarioController.update);
router.delete('/:id', auth, UsuarioController.delete);
router.post('/login', UsuarioController.login);
router.post('/logout', auth, UsuarioController.logout);

module.exports = router;