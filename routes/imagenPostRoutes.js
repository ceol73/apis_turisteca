const express = require('express');
const router = express.Router();
const ImagenPostController = require('../controllers/imagenPostController');

router.post('/', ImagenPostController.create);
router.get('/:id', ImagenPostController.findById);
router.get('/', ImagenPostController.findAll);
router.put('/:id', ImagenPostController.update);
router.delete('/:id', ImagenPostController.delete);

module.exports = router;