const express = require('express');
const router = express.Router();
const ImagenURLController = require('../controllers/imagenURLController');

router.post('/', ImagenURLController.create);
router.get('/:id', ImagenURLController.findById);
router.get('/', ImagenURLController.findAll);
router.put('/:id', ImagenURLController.update);
router.delete('/:id', ImagenURLController.delete);

module.exports = router;