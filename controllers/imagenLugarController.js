const ImagenLugarRepository = require('../repositories/imagenLugarRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ImagenLugarController = {
  async create(req, res) {
    await body('idLugar').isInt().notEmpty().run(req);
    await body('idImagen').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const imagenLugar = await ImagenLugarRepository.create(req.body);
      new APIresponse(true, 'ImagenLugar created successfully', imagenLugar, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const imagenLugar = await ImagenLugarRepository.findById(req.params.id);
      if (!imagenLugar) {
        return new APIresponse(false, 'ImagenLugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenLugar found', imagenLugar, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const imagenesLugar = await ImagenLugarRepository.findAll();
      new APIresponse(true, 'ImagenesLugar retrieved successfully', imagenesLugar, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idLugar').isInt().notEmpty().run(req);
    await body('idImagen').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ImagenLugarRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'ImagenLugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenLugar updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenLugarRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'ImagenLugar not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenLugar deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ImagenLugarController;
