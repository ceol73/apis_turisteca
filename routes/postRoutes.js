const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

router.post('/', PostController.create);
router.get('/:id', PostController.findById);
router.get('/', PostController.findAll);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

module.exports = router;
