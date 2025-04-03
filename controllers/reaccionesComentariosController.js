const ReaccionesComentariosRepository = require('../repositories/ReaccionesComentariosRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ReaccionesComentariosController = {
  async create(req, res) {
    await body('idComPost').isInt().notEmpty().run(req);
    await body('idComUser').isInt().notEmpty().run(req);
    await body('reaccionTipo').isInt().notEmpty().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const reaccionComentario = await ReaccionesComentariosRepository.create(req.body);
      new APIresponse(true, 'ReaccionComentario created successfully', reaccionComentario, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const reaccionComentario = await ReaccionesComentariosRepository.findById(req.params.id);
      if (!reaccionComentario) {
        return new APIresponse(false, 'ReaccionComentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionComentario found', reaccionComentario, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const reaccionesComentarios = await ReaccionesComentariosRepository.findAll();
      new APIresponse(true, 'ReaccionesComentarios retrieved successfully', reaccionesComentarios, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idComPost').isInt().notEmpty().run(req);
    await body('idComUser').isInt().notEmpty().run(req);
    await body('reaccionTipo').isInt().notEmpty().run(req);
    await body('creado_en').optional().isISO8601().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ReaccionesComentariosRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'ReaccionComentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionComentario updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ReaccionesComentariosRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'ReaccionComentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'ReaccionComentario deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ReaccionesComentariosController;
