const ComentariosRepository = require('../repositories/comentariosRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ComentariosController = {
  async create(req, res) {
    await body('idPost').isInt().notEmpty().run(req);
    await body('idUsuario').isInt().notEmpty().run(req);
    await body('contenido').isString().optional().run(req);
    await body('creado_en').isISO8601().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const comentario = await ComentariosRepository.create(req.body);
      new APIresponse(true, 'Comentario created successfully', comentario, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const comentario = await ComentariosRepository.findById(req.params.id);
      if (!comentario) {
        return new APIresponse(false, 'Comentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Comentario found', comentario, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const comentarios = await ComentariosRepository.findAll();
      new APIresponse(true, 'Comentarios retrieved successfully', comentarios, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idPost').isInt().notEmpty().run(req);
    await body('idUsuario').isInt().notEmpty().run(req);
    await body('contenido').isString().optional().run(req);
    await body('creado_en').isISO8601().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ComentariosRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Comentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Comentario updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ComentariosRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Comentario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Comentario deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ComentariosController;
