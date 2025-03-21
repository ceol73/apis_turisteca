const express = require('express');
const router = express.Router();
const ReaccionesComentariosController = require('../controllers/reaccionesComentariosController');

router.post('/', ReaccionesComentariosController.create);
router.get('/:id', ReaccionesComentariosController.findById);
router.get('/', ReaccionesComentariosController.findAll);
router.put('/:id', ReaccionesComentariosController.update);
router.delete('/:id', ReaccionesComentariosController.delete);

module.exports = router;