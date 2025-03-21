const express = require('express');
const router = express.Router();
const FollowsController = require('../controllers/followsController');

router.post('/', FollowsController.create);
router.get('/:id', FollowsController.findById);
router.get('/', FollowsController.findAll);
router.put('/:id', FollowsController.update);
router.delete('/:id', FollowsController.delete);

module.exports = router;