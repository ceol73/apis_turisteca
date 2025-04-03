const FollowsRepository = require('../repositories/FollowsRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const FollowsController = {
  async create(req, res) {
    await body('idSeguido').isInt().notEmpty().run(req);
    await body('idSeguidor').isInt().notEmpty().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const follow = await FollowsRepository.create(req.body);
      new APIresponse(true, 'Follow created successfully', follow, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const follow = await FollowsRepository.findById(req.params.id);
      if (!follow) {
        return new APIresponse(false, 'Follow not found', null, res, 404).send();
      }
      new APIresponse(true, 'Follow found', follow, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const follows = await FollowsRepository.findAll();
      new APIresponse(true, 'Follows retrieved successfully', follows, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idSeguido').isInt().notEmpty().run(req);
    await body('idSeguidor').isInt().notEmpty().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await FollowsRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Follow not found', null, res, 404).send();
      }
      new APIresponse(true, 'Follow updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await FollowsRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Follow not found', null, res, 404).send();
      }
      new APIresponse(true, 'Follow deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = FollowsController;
