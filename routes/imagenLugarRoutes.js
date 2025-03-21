const express = require('express');
const router = express.Router();
const ImagenLugarController = require('../controllers/imagenLugarController');

router.post('/', ImagenLugarController.create);
router.get('/:id', ImagenLugarController.findById);
router.get('/', ImagenLugarController.findAll);
router.put('/:id', ImagenLugarController.update);
router.delete('/:id', ImagenLugarController.delete);

module.exports = router;