const LugarRepository = require('../repositories/lugarRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const LugarController = {
  async create(req, res) {
    await body('coordLat').isFloat().notEmpty().run(req);
    await body('coordLon').isFloat().notEmpty().run(req);
    await body('nombre').isString().notEmpty().run(req);
    await body('descripcion').optional().isString().run(req);
    await body('idImagen').optional().isInt().run(req);
    await body('idCategoria').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const lugar = await LugarRepository.create(req.body);
      new APIresponse(true, 'Lugar created successfully', lugar, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const lugar = await LugarRepository.findById(req.params.id);
      if (!lugar) {
        return new APIresponse(false, 'Lugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'Lugar found', lugar, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const lugares = await LugarRepository.findAll();
      new APIresponse(true, 'Lugares retrieved successfully', lugares, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('coordLat').isFloat().notEmpty().run(req);
    await body('coordLon').isFloat().notEmpty().run(req);
    await body('nombre').isString().notEmpty().run(req);
    await body('descripcion').optional().isString().run(req);
    await body('idImagen').optional().isInt().run(req);
    await body('idCategoria').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await LugarRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Lugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'Lugar updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await LugarRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Lugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'Lugar deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = LugarController;
