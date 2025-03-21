const express = require('express');
const router = express.Router();
const LugarController = require('../controllers/lugarController');

router.post('/', LugarController.create);
router.get('/:id', LugarController.findById);
router.get('/', LugarController.findAll);
router.put('/:id', LugarController.update);
router.delete('/:id', LugarController.delete);

module.exports = router;