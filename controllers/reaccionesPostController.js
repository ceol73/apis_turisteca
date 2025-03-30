const ReaccionesPostRepository = require('../repositories/reaccionesPostRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ReaccionesPostController = {
  async create(req, res) {
    await body('idPost').isInt().notEmpty().run(req);
    await body('reaccionTipo').isInt().notEmpty().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const reaccionPost = await ReaccionesPostRepository.create(req.body);
      new APIresponse(true, 'ReaccionPost created successfully', reaccionPost, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const reaccionPost = await ReaccionesPostRepository.findById(req.params.id);
      if (!reaccionPost) {
        return new APIresponse(false, 'ReaccionPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionPost found', reaccionPost, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const reaccionesPost = await ReaccionesPostRepository.findAll();
      new APIresponse(true, 'ReaccionesPost retrieved successfully', reaccionesPost, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idPost').optional().isInt().run(req);
    await body('reaccionTipo').optional().isInt().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ReaccionesPostRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'ReaccionPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionPost updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ReaccionesPostRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'ReaccionPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionPost deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ReaccionesPostController;
