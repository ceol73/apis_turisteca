const ImagenURLRepository = require('../repositories/ImagenURLRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ImagenURLController = {
  async create(req, res) {
    await body('imagenURL').isString().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const imagenURL = await ImagenURLRepository.create(req.body);
      new APIresponse(true, 'ImagenURL created successfully', imagenURL, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const imagenURL = await ImagenURLRepository.findById(req.params.id);
      if (!imagenURL) {
        return new APIresponse(false, 'ImagenURL not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenURL found', imagenURL, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const imagenesURL = await ImagenURLRepository.findAll();
      new APIresponse(true, 'ImagenesURL retrieved successfully', imagenesURL, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('imagenURL').isString().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ImagenURLRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'ImagenURL not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenURL updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenURLRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'ImagenURL not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenURL deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ImagenURLController;
