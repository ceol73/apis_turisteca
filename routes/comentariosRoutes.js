const express = require('express');
const router = express.Router();
const ComentariosController = require('../controllers/comentariosController');

// Define routes for comentarios operations
router.post('/', ComentariosController.create);
router.get('/:id', ComentariosController.findById);
router.get('/', ComentariosController.findAll);
router.put('/:id', ComentariosController.update);
router.delete('/:id', ComentariosController.delete);

module.exports = router;