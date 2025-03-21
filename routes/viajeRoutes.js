const express = require('express');
const router = express.Router();
const ViajeController = require('../controllers/viajeController');

router.post('/', ViajeController.create);
router.get('/:id', ViajeController.findById);
router.get('/', ViajeController.findAll);
router.put('/:id', ViajeController.update);
router.delete('/:id', ViajeController.delete);

module.exports = router;