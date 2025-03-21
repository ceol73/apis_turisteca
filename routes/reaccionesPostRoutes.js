const express = require('express');
const router = express.Router();
const ReaccionesPostController = require('../controllers/reaccionesPostController');

router.post('/', ReaccionesPostController.create);
router.get('/:id', ReaccionesPostController.findById);
router.get('/', ReaccionesPostController.findAll);
router.put('/:id', ReaccionesPostController.update);
router.delete('/:id', ReaccionesPostController.delete);

module.exports = router;