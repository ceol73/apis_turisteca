const ImagenPostRepository = require('../repositories/ImagenPostRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ImagenPostController = {
  async create(req, res) {
    await body('idPost').isInt().notEmpty().run(req);
    await body('idImagen').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const imagenPost = await ImagenPostRepository.create(req.body);
      new APIresponse(true, 'ImagenPost created successfully', imagenPost, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const imagenPost = await ImagenPostRepository.findById(req.params.id);
      if (!imagenPost) {
        return new APIresponse(false, 'ImagenPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenPost found', imagenPost, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const imagenesPost = await ImagenPostRepository.findAll();
      new APIresponse(true, 'ImagenesPost retrieved successfully', imagenesPost, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idPost').isInt().notEmpty().run(req);
    await body('idImagen').isInt().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ImagenPostRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'ImagenPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenPost updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenPostRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'ImagenPost not found', null, res, 404).send();
      }
      new APIresponse(true, 'ImagenPost deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ImagenPostController;
